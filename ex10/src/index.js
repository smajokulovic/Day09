function logicOrOrder(num) {
    if(num < 50) {
        return "Less than 50";
    } else if (num <= 100){
        return "Less than 100";
    } else {
        return "Greater than or equal to 100";

    }

}
console.log(logicOrOrder(28));
console.log(logicOrOrder(60));
console.log(logicOrOrder(110));
module.exports = logicOrOrder;