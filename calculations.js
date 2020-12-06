/*
function multiplyByTen(num) {

            return num * 10;
    
}
// This function should multiply the original number by 10, but has an error
console.log(multiplyByTen(15));

var testObject = {
        sayHi: function(name) {
               return 'Hello '+name+'!';
        }
}
// This function should return "Hello <name>!", but has an error
console.log(testObject.sayHi('Piotr'));


var calculateVAT = {
        rate: 0.2,
        getVATAmount: function(subTotal) {
               return subTotal * this.rate;
        }
}
// This function should get the VAT amount from the original cost, but has an error
console.log(calculateVAT.getVATAmount(67));


var countup = {
    i: 0,
    startCount: function () {
        setInterval(function(){ countup.i++; console.log(countup.i)}, 1000)
    }
}
// This function should return an incrementing number every second, but is incomplete


countup.startCount();



function goesIntoFour(num) {
    if(num % 4 === 0){
        return true;
    }else{
        return false;
    }
}
// this function should return a boolean, checking if the number is divisble by 4, but is incomplete
console.log(goesIntoFour(4));
console.log(goesIntoFour(6));
console.log(goesIntoFour(8));
console.log(goesIntoFour(19));
console.log(goesIntoFour(20));
*/

function goesIntoFour(num) {
    return Boolean(num % 4 === 0);

}
// this function should return a boolean, checking if the number is divisble by 4, but is incomplete
console.log('new test ' + goesIntoFour(4));
console.log(goesIntoFour(6));
console.log(goesIntoFour(8));
console.log(goesIntoFour(19));
console.log(goesIntoFour(20));


function isThisMonday() {
    var date = new Date();
    var n = date.getDay();
    return Boolean(n === 0)
}
// this function should return true if the day of the week is Monday, but is incomplete
console.log('is it monday ' + isThisMonday());
