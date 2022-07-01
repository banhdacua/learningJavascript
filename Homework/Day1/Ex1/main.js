//Bài 1
function buttonOnClick() {
    alert("Đã bấm vào button");
}
function InputButton() {
    let ho = String(document.getElementById("text_1st_name").value);
    let ten = String(document.getElementById("text_last_name").value);
    alert(`Xin chào ${ho} ${ten}`);
}
function calClick() {
    let a = Number(document.getElementById("numA").value);
    let b = Number(document.getElementById("numB").value);
    let tong = a + b, hieu = a - b, tich = a * b, thuong =a / b;
    alert(`Tổng: ${tong}, Hiệu: ${hieu}, Tích: ${tich}, Thương: ${thuong}`);
}
function randomClick() {
    //let random = Math.random(0, 100);
    let random = Math.floor(Math.random() * 101);
    alert(`Random: ${random}`);
}
function convertFtoC()
{
    let a = Number(document.getElementById("tempInput").value);
    let temp = ( a - 32 ) * 5 / 9;
    let str = String(`${a} `+'\u00B0' + ` F = ` + `${temp} `+'\u00B0' + ` C`)
    document.getElementById("result").innerHTML = str;
}
function convertCtoF()
{
    let a = Number(document.getElementById("tempInput").value);
    let temp = a * 9 / 5 + 32;
    let str = String(`${a} `+'\u00B0' + ` C = ` + `${temp} `+'\u00B0' + ` F`)
    document.getElementById("result").innerHTML = str;
}
function ramdomConvert() {
    let randomNum = Math.floor(Math.random() * 2);
    if( randomNum == 0 ) {
        //F to C
        let a = Math.floor(Math.random() * 101);
        let temp = ( a - 32 ) * 5 / 9;
        let str = String(`${a} `+'\u00B0' + ` F = ` + `${temp} `+'\u00B0' + ` C`)
        document.getElementById("result_random").innerHTML = str;
    }
    else {
        //C to F
        let a = Math.floor(Math.random() * 101);
        let temp = a * 9 / 5 + 32;
        let str = String(`${a} `+'\u00B0' + ` C = ` + `${temp} `+'\u00B0' + ` F`)
        document.getElementById("result_random").innerHTML = str;
    }
}