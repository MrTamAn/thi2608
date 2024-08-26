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

if(n<=50){
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("nhập so thu" + i)
    }
}
console.log(arr)
let k = + prompt("nhap k")
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        let tong = arr[i]+arr[j]
        console.log(tong)
        if(tong%k == 0){
            sum++
        }
    }
}
console.log(sum);