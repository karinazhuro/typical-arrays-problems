exports.min = function min(array) {
    if (typeof array !== 'object' || array.length === 0) {
        return 0;
    } else {
        return Math.min.apply(null, array);
    }
}

exports.max = function max(array) {
    if (typeof array !== 'object' || array.length === 0) {
        return 0;
    } else {
        return Math.max.apply(null, array);
    }
}

exports.avg = function avg(array) {
    let sum = 0;
    if (typeof array !== 'object' || array.length === 0) {
        return 0;
    } else {
        for (let number of array) {
            sum += number;
        }
        return sum / array.length;
    }
}
