module.exports = function getZerosCount(number) {

    var zerosCount = number;
    var result = 0;

    do {
        zerosCount = Math.floor(zerosCount / 5);
        result = result + zerosCount;
    } while (zerosCount >= 5);
    console.log("result = " + result);
    return (result);
}