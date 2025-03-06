let num: number = 7;
if (num%2==0){

    console.log("Number is even");
}
else{
    console.log("Number is odd");
}




let prices: number[] = [10, 200, 30, 40, 50, 60, 70, 80, 90, 100]; // تصحيح اسم المصفوفة

let maxNumber: number = 70; 


for (let i = 0; i < prices.length; i++) {
    if (prices[i] > maxNumber) {
        console.log(prices[i]);
    }
}



let numbers1:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

let sumnumber: number = 0;
for(let a=0;a<numbers1.length;a++){
    sumnumber +=numbers1[a];
}

console.log("Sum of all numbers:", sumnumber);

