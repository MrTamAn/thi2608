// let arr = []
// let sum = 0;
// arr[0] = +prompt("Nhập số thứ 1: ")
// arr[1] = +prompt("Nhập số thứ 2: ")
// arr[2] = +prompt("Nhập số thứ 3: ")
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i]%5===0 && arr[i]%3===0){
//         sum+= arr[i]
//     }
// }
// console.log(sum)
let n = +prompt("nhap N:");
let arr = [];
let sum = 0;
if(n<20){
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("nhập so thu" + i)
    }
}
console.log(arr)
for (let i = 0; i < arr.length; i++) {
    if ( arr[i]%5===0 && arr[i]%3===0){
        sum+= arr[i]
    }
}
console.log(sum);