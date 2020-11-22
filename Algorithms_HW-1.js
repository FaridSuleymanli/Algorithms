// Tapşırıq 1
//var n = 21;
//function Natural (n){
// if(n % 3 == 0 && n % 7 == 0){
// console.log("Bolunur");
//}
//else{
// console.log("Bolunmur");
//}
//}

//Natural(21);

// Tapşırıq 2
//var tqiymeti = 68;

//if (tqiymeti >= 0 && tqiymeti <= 100){
// if(tqiymeti >= 91 && tqiymeti <= 100){
 //console.log("A");
// }
 //else if(tqiymeti >= 81 && tqiymeti <= 90){
 //console.log("B");
 //}
 //else if(tqiymeti >= 71 && tqiymeti <= 80){
 //console.log("C");
 //}
 //else if(tqiymeti >= 61 && tqiymeti <= 70){
 //console.log("D");
//}
//else if(tqiymeti >= 51 && tqiymeti <= 60){
 //console.log("E");
//}
//else {
 //console.log("Kesildiniz");
//}
//}

var num = 32;
var count = 0;

while(num > 0){
    num = num / 10;
    count = count + 1;
}
console.log(count);