function inN()
{
    let arr = [];
    let n = Number(document.getElementById("idNum").value);
    if(n < 1) {
        document.getElementById("output").innerHTML = "Lỗi rồi";
    }
    if(n > 1)
    {
        for(let i = 0; i < n; i++)
        {
            arr[i] = i + 1;
        }
        let text = arr.toString();
        document.getElementById("output").innerHTML = text;

    }
}
function calA() {
    let a = Number(document.getElementById("numA").value);
    let sum = 0;
    let i = 0;
    while( sum < a )
    {
        i++;
        sum = sum + i;
        console.log(sum);
    }
    document.getElementById("output_bai2").innerHTML = "Giá trị n cần tìm " + i;
}
function funBai3() {
    let n = document.getElementById("numN").value;
    let arrN = n.split('').map(Number);
    console.log(arrN);
    document.getElementById("soLuongChuSo").innerHTML = "Số lượng các chữ số: " + arrN.length;
    let sum = 0;
    for(let i = 0; i<arrN.length; i++)
    {
        sum = sum + arrN[i];
    }
    document.getElementById("tongCacChuSo").innerHTML = "Tổng các chữ số: " + sum;
    arrN = arrN.reverse();
    n = arrN.toString().replaceAll(',','');
    document.getElementById("daoNguocChuSo").innerHTML = n;
}
function funBai4() {
    let n = document.getElementById("arrNumN").value;
    let arrNumN = n.split(' ').map(Number);
    let indexAm = 0, indexDuong = 0;
    
    let arrDuong =[];

    arrNumN.forEach(element => {
        if( element < 0 ) {
            indexAm = indexAm + 1;
        }
        if( element > 0 ) {
            arrDuong[indexDuong] = element;
            indexDuong = indexDuong + 1;
        }
    });
    let maxDuong = arrDuong[0], minDuong = arrDuong[0];
    for(let i = 0; i < arrDuong.length; i++) {
        if( maxDuong < arrDuong[i] ) {
            maxDuong = arrDuong[i];
        }
        if( minDuong > arrDuong[i] ) {
            minDuong = arrDuong[i];
        }
    }
    let ketqua1 = "Số các số âm: " + indexAm + " || Số các số dương: " + indexDuong;
    document.getElementById("outputIndex").innerHTML = ketqua1;
    let ketqua2 = "Số dương lớn nhất " + maxDuong + " || Số dương nhỏ nhất " + minDuong;
    document.getElementById("outputMaxMin").innerHTML = ketqua2
}