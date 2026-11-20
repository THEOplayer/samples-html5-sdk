export function numberToFormat(time) {
    let format = _determineFormatString(time),
        isNegative = time < 0,
        neutralisedTime = Math.abs(time),
        decimal = time - Math.floor(time);
    return format.replace('-', isNegative ? '-' : '')
        .replace('hh', Math.floor(neutralisedTime/3600) + '')
        .replace('mm', _fillNumber(Math.floor(neutralisedTime/60) % 60)) // remove _fillNumber-method if you don't want 9 to be displayed as 09
        .replace('ss', _fillNumber(Math.floor(neutralisedTime % 60)));
}

function _determineFormatString(time) {
    if(time > 3600) {
        return 'hh:mm:ss';
    } else {
        return 'mm:ss';
    }
}

function _fillNumber (num) { // remove this function if you don't want (e.g.) 17:1;5 to be displayed as 7:01;05
    return (num < 10) ? '0' + num : num;
}