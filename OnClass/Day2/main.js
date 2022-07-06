// Bai 1
function btnCheck() {
    let a = document.getElementById("inputNum").value;
    if(a > 0)
    {
        alert("A là số dương");
    }
    if(a < 0)
    {
        alert("A là số âm");
    }
    if(a == 0)
        alert("A là số 0");
}
function bai2() {
    let a = Number(prompt("Nhập vào số a", 1));
    let b = Number(prompt("Nhập vào số b", 1));
    if(a < b) {
        alert(`Só lớn nhất là ${b}`);
    }
    else
        alert(`Só lớn nhất là ${a}`);
}
function bai3() {
    let a = [];
    a.push(Number(prompt("Nhập vào số a", 1)));
    a.push(Number(prompt("Nhập vào số b", 1)));
    a.push(Number(prompt("Nhập vào số c", 1)));
    let max = a[0];
    for(let i = 0; i < 3; i++)
    {
        if(max < a[i]) {
            max = a[i];
        }
    }
    alert(`Só lớn nhất là ${max}`);
}
function bai4() {
    //let str = prompt("Nhập", "");
    let str = document.getElementById("inputText").value;
    
    document.getElementById("result").innerHTML = str;
}
function bai5() {
    let str = "ssss AAAA           bBbbbb   fffFF";
    str = str.toLowerCase();
    str = str.replace( /\s\s+/g, ' ' );
    //
    let strWord = str.split(" ");
    for(let i = 0; i < strWord.length; i++) {
        strWord[i] = strWord[i].charAt(0).toUpperCase() + strWord[i].slice(1);
    }
    str = strWord.join(" ");
    alert(str);
}
function bai7() {
    var myArray = [-1,2,3,4,5];
    for(let i = 0; i< myArray.length; i++)
    {
        if(myArray[i] > 0) {
            myArray[i] = myArray[i] * 2;
        }
        if(myArray[i] < 0) {
            myArray[i] = myArray[i] * -1;
        }  
    }
    var total = eval(myArray.join("+"));
    alert(total);
    
}
function isPhoneNumeber(phoneNumber) {
    let checkPhoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(phoneNumber.value.match(checkPhoneNumber)) {
        return true;
    }
    else {
        return false;
    }
}
function bai8() {
    let phoneNumber = document.getElementById("inputPhoneNumber");
    alert(isPhoneNumeber(phoneNumber));
}