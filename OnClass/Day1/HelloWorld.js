"use strict"

let a = Number(prompt("Nhập a: ", ""));
let b = a % 1;
if ( b == 0 && a > 0)
{
    alert(`A là số nguyên dương`)
}
else if ( b == 0 && a < 0)
{
    alert("A là số nguyên âm")
}
else {
    alert("A không phải số nguyên")
}



