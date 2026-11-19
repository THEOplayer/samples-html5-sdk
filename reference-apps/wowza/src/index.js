const theoplayerWowza = {
    registerPlayer: function(player) {

        let wowzaData = null;
        let wowzaSource = null;
        let streamIsUnavailable = false;
        let wowzaStreamInterval;
        let countdownTimerInterval;
        let isWaiting = false;
        let hasInterval = false;
        let statechangeCallback = null;
        let datachangeCallback = null;

        function handleWowzaOffline() {
            statechangeCallback({state: "unavailable", info: "The configured stream is currently unavailable."});
            streamIsUnavailable = true;
            createStreamStatusDiv();
        }

        function getRetryTimeout() {
            return ((wowzaSource && wowzaSource.retryTimeout) || 3000);
        }

        function getOfflineText() {
            return ((wowzaSource && wowzaSource.offlineText) || "The stream is currently not available.");
        }

        function setupCountdown(countDownDate) {
            const countDownTime = countDownDate.getTime();
            countdownTimerInterval = setInterval(function() {
                const now = new Date().getTime();
                const distance = countDownTime - now;
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                getContainer().querySelector('.countdown').innerHTML = days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ";
                if (distance < 0) {
                    clearInterval(countdownTimerInterval);
                    getContainer().querySelector('.countdown').innerHTML = "Starting...";
                }
            }, 1000);
        }

        function createStreamStatusDiv() {
            let streamStatusDiv = getContainer().querySelector('.stream-status');
            if (!streamStatusDiv) {
                streamStatusDiv = document.createElement('div');
                streamStatusDiv.className = 'stream-status';
                const poster = getPoster();
                if (poster) {
                    streamStatusDiv.style.background = 'url("' + poster + '")';
                    streamStatusDiv.style.backgroundSize = 'cover';
                }

                if (wowzaData) {
                    let countdown = wowzaData['countdown_timestamp'];
                    if (countdown) {
                        countdown = new Date((parseInt(countdown)*1000));
                        if (countdown.getTime() > Date.now()) { // in the future
                            const countdownDiv = document.createElement('div');
                            countdownDiv.className = "stream-status-overlay";
                            const date = countdown.toDateString();
                            const hhmm = countdown.toISOString().substr(11, 5);
                            const title = wowzaData['title'] + "<br />" || "";
                            countdownDiv.innerHTML = title + "Stream will start on:<br />" + date + " @ " + hhmm;
                            streamStatusDiv.appendChild(countdownDiv);

                            const countdownTimer = document.createElement('div');
                            countdownTimer.className = 'countdown';
                            countdownTimer.innerHTML = "&nbsp;";
                            countdownDiv.appendChild(countdownTimer);
                            setupCountdown(countdown);
                        }
                    }
                }
                else {
                    streamStatusDiv.textContent = getOfflineText();
                    streamStatusDiv.classList.add("no-data");
                }

                getContainer().appendChild(streamStatusDiv);
            }
        }
        function removeStreamStatusDiv() {
            const streamStatusDiv = getContainer().querySelector('.stream-status');
            if (streamStatusDiv) {
                streamStatusDiv.parentNode.removeChild(streamStatusDiv);
            }
        }
        function handleWowzaOnline() {
            statechangeCallback({state: "available", info: "The configured stream is available."})
            streamIsUnavailable = false;
            removeStreamStatusDiv();
        }

        function getContainer() {
            return player.element.parentNode.parentNode;
        }



        function streamInterval() {
            const currentSrc = player.src;
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && (this.status != 200) && isWaiting && !streamIsUnavailable) {

                    handleWowzaOffline();
                } else if (this.readyState == 4 && (this.status == 200) && streamIsUnavailable) {
                    reloadCurrentStream();
                    handleWowzaOnline();
                }
            };
            xhttp.open("GET", currentSrc, true);
            xhttp.send();
        }

        function checkStreamStatus() {
            isWaiting = true;
            if (!hasInterval) {
                hasInterval = true;
                wowzaStreamInterval = setInterval(streamInterval, getRetryTimeout());
            }
        }

        function setPlaying() {
            isWaiting = false;
        }

        function registerWowzaEvents() {
            if (player) {
                player.network.addEventListener('offline', handleWowzaOffline);
                player.network.addEventListener('online', handleWowzaOnline);
                player.addEventListener('waiting', checkStreamStatus);
                player.addEventListener('playing', setPlaying)
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
                player.network.removeEventListener('online', handleWowzaOnline);
                player.removeEventListener('waiting', checkStreamStatus);
                player.removeEventListener('playing', setPlaying)
            }
        }

        function getPoster() {
            return ((wowzaData && wowzaData.image) || player.source.metadata && player.source.metadata.wowza && player.source.metadata.wowza.placeholderImageUrl);
        }

        function sourceHandler(e) {
            unregisterWowzaEvents();
            wowzaSource = e.source.metadata && e.source.metadata.wowza;
            if (wowzaSource) {
                registerWowzaEvents();
                const wowzaJson = wowzaSource.jsonUrl;
                if (wowzaJson) {
                    registerWowzaData(wowzaJson);
                }
                statechangeCallback = wowzaSource.statechangeCallback;
                datachangeCallback = wowzaSource.datachangeCallback;
            }
        }

        function registerWowzaData(url) {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && (this.status == 200)) {
                    wowzaData = JSON.parse(xhttp.responseText);
                    datachangeCallback({data: wowzaData, status: "available"});
                    player.poster = getPoster();
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
        }

        function reloadCurrentStream() {
            player.autoplay = true;
            player.source = player.source;
        }

        function getWowzaData() {
            return wowzaData;
        }

        function getState() {
            return (streamIsUnavailable ? "offline" : "online");
        }

        player.addEventListener('sourcechange', sourceHandler);

        return {
            getStreamData: getWowzaData,
            getState: getState
        };
    }
}
window.theoplayerWowza = theoplayerWowza;