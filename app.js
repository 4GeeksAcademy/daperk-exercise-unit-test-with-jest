const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound

}
const fromEuroToDollar = function(euro) {
    let dollar = euro * 1.07
    return dollar
}
const fromDollarToYen = function(dollar){
    let yen = dollar /1.07 * 156.5
    return yen
}
const fromYenToPound = function(Yen){
    let pound = Yen /156.5 * 0.87
    return pound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen};
