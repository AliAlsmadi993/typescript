var num = 7;
if (num % 2 == 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}
var prices = [10, 200, 30, 40, 50, 60, 70, 80, 90, 100]; // تصحيح اسم المصفوفة
var maxNumber = 70;
for (var i = 0; i < prices.length; i++) {
    if (prices[i] > maxNumber) {
        console.log(prices[i]);
    }
}
var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumnumber = 0;
for (var a = 0; a < numbers1.length; a++) {
    sumnumber += numbers1[a];
}
console.log("Sum of all numbers:", sumnumber);
