var theoplayerWowza = {
  registerPlayer: function registerPlayer(player) {
    var wowzaData = null;
    var wowzaSource = null;
    var streamIsUnavailable = false;
    var wowzaStreamInterval;
    var countdownTimerInterval;
    var isWaiting = false;
    var hasInterval = false;
    var statechangeCallback = null;
    var datachangeCallback = null;
    var queryParameter = null;

    function handleWowzaOffline() {
      statechangeCallback({
        state: "unavailable",
        info: "The configured stream is currently unavailable."
      });
      streamIsUnavailable = true;
      createStreamStatusDiv();

      if (!hasInterval) {
        hasInterval = true;
        wowzaStreamInterval = setInterval(streamInterval, getRetryTimeout());
      }
    }

    function getRetryTimeout() {
      return wowzaSource && wowzaSource.retry || 3000;
    }

    function getOfflineText() {
      return wowzaSource && wowzaSource.offlineText || "The stream is currently not available.";
    }

    function setupCountdown(countDownDate) {
      var countDownDate = countDownDate.getTime();
      countdownTimerInterval = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);
        getContainer().querySelector('.countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
          clearInterval(countdownTimerInterval);
          getContainer().querySelector('.countdown').innerHTML = "Starting...";
        }
      }, 1000);
    }

    function createStreamStatusDiv() {
      var streamStatusDiv = getContainer().querySelector('.stream-status');

      if (!streamStatusDiv) {
        streamStatusDiv = document.createElement('div');
        streamStatusDiv.className = 'stream-status';
        var poster = getPoster();

        if (poster) {
          streamStatusDiv.style.background = 'url("' + poster + '")';
          streamStatusDiv.style.backgroundSize = 'cover';
        }

        if (wowzaData) {
          var countdown = wowzaData['countdown_timestamp'];

          if (countdown) {
            countdown = new Date(parseInt(countdown) * 1000);

            if (countdown.getTime() > Date.now()) {
              // in the future
              var countdownDiv = document.createElement('div');
              countdownDiv.className = "stream-status-overlay";
              var date = countdown.toDateString();
              var hhmm = countdown.toISOString().substr(11, 5);
              var title = wowzaData['title'] + "<br />" || false;
              countdownDiv.innerHTML = title + "Stream will start on:<br />" + date + " @ " + hhmm;
              streamStatusDiv.appendChild(countdownDiv);
              var countdownTimer = document.createElement('div');
              countdownTimer.className = 'countdown';
              countdownTimer.innerHTML = "&nbsp;";
              countdownDiv.appendChild(countdownTimer);
              setupCountdown(countdown);
            }
          }
        } else {
          streamStatusDiv.textContent = getOfflineText();
          streamStatusDiv.classList.add("no-data");
        }

        getContainer().appendChild(streamStatusDiv);
      }
    }

    function removeStreamStatusDiv() {
      var streamStatusDiv = getContainer().querySelector('.stream-status');

      if (streamStatusDiv) {
        streamStatusDiv.parentNode.removeChild(streamStatusDiv);
      }
    }

    function handleWowzaOnline() {
      statechangeCallback({
        state: "available",
        info: "The configured stream is available."
      });
      streamIsUnavailable = false;
      removeStreamStatusDiv();
    }

    function getContainer() {
      return player.element.parentNode.parentNode;
    }

    function getSrc(sourceDescription) {
      return sourceDescription.sources[0].src;
    } // pass along back-ups streams to other sourcedescriptions
    // function getBackupStreams(sourceDescription) {
    //     return sourceDescription.metadata.wowza && sourceDescription.metadata.wowza.backupStreams;
    // }


    function streamInterval() {
      var sources = [player.source];

      if (wowzaSource.backupStreams && wowzaSource.backupStreams.length > 0) {
        for (var i = 0; i < wowzaSource.backupStreams.length; i++) {
          sources.push(wowzaSource.backupStreams[i]);
        }
      }

      console.log("sources", sources);

      var f = (function(){
        var xhttp = [], i;
        for (var i = 0; i < sources.length; i++) {
          var currentSrc = getSrc(sources[i]);
          var testSrc = currentSrc;
          var rn = Math.round(Math.random() * 1000000000000);

          if (currentSrc.indexOf("?") > -1) {
            testSrc = currentSrc + "&rn=" + rn;
          } else {
            testSrc = currentSrc + "?rn=" + rn;
          }

          (function(i){
            xhttp[i] = new XMLHttpRequest();
            xhttp[i].open("GET", testSrc, true);
            xhttp[i].onreadystatechange = function(){
              if (xhttp[i].readyState === 4 && xhttp[i].status !== 200 && isWaiting && !streamIsUnavailable) {
                handleWowzaOffline();
              } else if (xhttp[i].readyState === 4 && xhttp[i].status === 200 && streamIsUnavailable) {
                handleWowzaOnline();
                reloadCurrentStream(sources[i], i);
              }
            };
            xhttp[i].send();
          })(i);
        }
      })();
    }

    function checkStreamStatus() {
      isWaiting = true;

      if (!hasInterval) {
        hasInterval = true;
        wowzaStreamInterval = setInterval(streamInterval, getRetryTimeout());
      }
    }

    function requestInterceptor(request) {
      if (request.url == player.src) {
        // check master playlist
        var urlSplit = request.url.split("?");

        if (urlSplit.length > 1) {
          // check if master playlist has query params
          queryParameter = urlSplit[1];
        } else {
          queryParameter = null; // reset if no query params
        }
      } else if (queryParameter) {
        // if no master playlist and active set of query params
        var newUrl = request.url + "?" + queryParameter; // append query params

        request.redirect({
          url: newUrl
        });
      }
    }

    function setPlaying() {
      isWaiting = false;
    }

    function registerWowzaEvents() {
      if (player) {
        player.network.addEventListener('offline', handleWowzaOffline);
        player.addEventListener('error', handleWowzaOffline);
        player.network.addEventListener('online', handleWowzaOnline);
        player.addEventListener('waiting', checkStreamStatus);
        player.addEventListener('playing', setPlaying);

        if (wowzaSource && wowzaSource.queryParametersPassthrough) {
          player.network.addRequestInterceptor(requestInterceptor);
        }
      }
    }

    function unregisterWowzaEvents() {
      if (player) {
        wowzaData = null;
        wowzaSource = null;
        streamIsUnavailable = false;
        clearInterval(wowzaStreamInterval);
        clearInterval(countdownTimerInterval);
        isWaiting = false;
        hasInterval = false;
        statechangeCallback = null;
        datachangeCallback = null;
        player.network.removeEventListener('offline', handleWowzaOffline);
        player.removeEventListener('error', handleWowzaOffline);
        player.network.removeEventListener('online', handleWowzaOnline);
        player.removeEventListener('waiting', checkStreamStatus);
        player.removeEventListener('playing', setPlaying);
        player.network.addRequestInterceptor(requestInterceptor);
      }
    }

    function getPoster() {
      return wowzaData && wowzaData.image || player.source.metadata && player.source.metadata.wowza && player.source.metadata.wowza.placeholderImageUrl;
    }

    function sourceHandler(e) {
      unregisterWowzaEvents();
      removeStreamStatusDiv();
      wowzaSource = e.source.metadata && e.source.metadata.wowza;

      if (wowzaSource) {
        registerWowzaEvents();
        var wowzaJson = wowzaSource.jsonUrl;

        if (wowzaJson) {
          registerWowzaData(wowzaJson);
        }

        statechangeCallback = wowzaSource.statechangeCallback;
        datachangeCallback = wowzaSource.datachangeCallback;
      }
    }

    function registerWowzaData(url) {
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          wowzaData = JSON.parse(xhttp.responseText);
          datachangeCallback({
            data: wowzaData,
            status: "available"
          });
          player.poster = getPoster();
        }
      };

      xhttp.open("GET", url, true);
      xhttp.send();
    }

    function reloadCurrentStream(source, i) {
      player.autoplay = true;
      if (source) {
        if (source.metadata.wowza.backupStreams) {
           source = source;
        } else {
          var backupStreams = player.source.metadata.wowza.backupStreams;
          var originalSourceFixedFormatting = fixSource(player.source);
          backupStreams[i-1] = originalSourceFixedFormatting;
          source.metadata.wowza.backupStreams = backupStreams;
        }
        player.source = source;
      } else {
        player.source = player.source;
      }
    }

    function fixSource(source) {
      if (source.metadata.wowza.backupStreams) {
        delete source.metadata.wowza.backupStreams;
      }
      return source;
    }

    function getWowzaData() {
      return wowzaData;
    }

    function getState() {
      return streamIsUnavailable ? "offline" : "online";
    }

    player.addEventListener('sourcechange', sourceHandler);
    return {
      getStreamData: getWowzaData,
      getState: getState
    };
  }
};
window.theoplayerWowza = theoplayerWowza;