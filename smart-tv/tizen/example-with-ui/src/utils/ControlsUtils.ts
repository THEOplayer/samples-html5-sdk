import {numberToFormat} from "./TimeUtils";

let timer,
    animationID,
    waitOneFrame;

function removeTimeout() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function resetClasses (player, callback) {
    player.element.classList.remove('theo-show-controls');
    player.element.classList.remove('theo-hide-controls');
    player.element.classList.remove('theo-hide-controls-with-delay');
    animationID = window.requestAnimationFrame((e) => {
        clearInterval(animationID);
        callback();
    });
}

export function showControlsTemporary (player) {
    removeTimeout();
    resetClasses(player, function () {
        player.element.classList.add('theo-hide-controls-with-delay');
        timer = setTimeout(() => {
            player.element.classList.remove('theo-hide-controls-with-delay');
            player.element.classList.add('theo-hide-controls');
        }, 2300);
    });
}

// set temporary UI controls, but only if the locked controls are not showing
export function showControlsTemporarySecurely (player) {
    if (!player.element.classList.contains('theo-show-controls')) { // locked controls
        showControlsTemporary(player);
    }
}

export function showControlsTemporaryIfNotPaused(player) {
    if (!player.paused) {
        showControlsTemporary(player);
    }
}

export function lockControls (player) {
    removeTimeout();
    resetClasses(player, function () {
        player.element.classList.add('theo-show-controls');
    });
}

function getSeekbarRange(range: TimeRanges, duration: number) {
    const length = range.length;

    if (!length) {
        if (duration) {
            return [0, duration];
        }

        return [];
    }


    return [range.start(0), range.end(length - 1)];
}

export function styleProgressBar (currentTime : number, player, progressbar : HTMLElement) {
    let simplifiedRanges = getSeekbarRange(player.seekable, player.duration);
    if (isLiveAndNotSeekable(player)) {
        player.element.classList.add('theo-live-no-dvr');
        return;
    } else if (player.element.classList.contains('theo-live-no-dvr')) {
        player.element.classList.remove('theo-live-no-dvr');
    }

    let beginSeekable = simplifiedRanges[0],
        endSeekable = simplifiedRanges[1],
        seekableRange = endSeekable - beginSeekable,
        normalisedCurrentTime = currentTime - beginSeekable;
    progressbar.style.width = (normalisedCurrentTime / seekableRange) * 100 + '%';
}

export function getCurrentPlaybackTimeToShow(currentTime: number, player) : string {
    const simplifiedRanges = getSeekbarRange(player.seekable, player.duration);
    const actualSeekableDuration = simplifiedRanges[1] - simplifiedRanges[0];
    const normalisedCurrentTime = currentTime - simplifiedRanges[0];

    if (player.duration === Infinity) {
        return '-' + numberToFormat(normalisedCurrentTime - actualSeekableDuration);
    } else {
        return numberToFormat(normalisedCurrentTime);
    }
}

export function isLiveAndNotSeekable (player) : boolean{
    const seekable = getSeekbarRange(player.seekable, player.duration);
    return player.duration === Infinity && (seekable.length && seekable[1] - seekable[0] < 60);
}
