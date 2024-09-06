function ch(){
    let a =document.getElementById('a').value;
    let b =document.getElementById('b').value;
    let ch
    if (a % b ===0) {
        alert('kkk')
        ch='so a chi het cho so b'
    }
    else  {
        ch=' a ko chia het cho so b'
    }
    document.getElementById('chh').innerHTML = ch;
}
function yes(){
    alert("<3")
}
function nt(){
    let nt =document.getElementById('nt').value;
    let nth
    if (nt >= 15){
        nth ='đủ điều kiện  vào lớp 10'
    }
    else {
        nth = 'ko đủ điều kiện  vào lớp 10'
    }
    document.getElementById('nt1').innerHTML = nth;
}
function ko(){
    let ko =document.getElementById('ko').value;
    let ko1
    if (ko > 0){
        ko1 ='lon hon ko'

    }
    else if (ko === 0){
        ko1 ='bằng  ko'
    }
    else if (ko < 0){
        ko1 ='nhỏ hơn ko'
    }
    document.getElementById('ko2').innerHTML = ko1;
}
function ss(){
    let s1 =document.getElementById('s1').value;
    let s2 =document.getElementById('s2').value;
    let s3 =document.getElementById('s3').value;
    let ss

    if(s1> s2 >s3){
        ss ='số lớn nhât là số 1'+':'+s1
    }
    else if (s1 ===s2 ===s3)
    {
        ss ='ba số bằng nhau '+':'+s1
    }
    else if (s2> s1 >s3 ){
        ss ='số lớn nhât là số 2'+':'+s2
    }
    else {
        ss ='số lớn nhât là số 3'+':'+s3
    }
    document.getElementById('sln').innerHTML = ss;
}
function tb() {
    let gk = document.getElementById('gk').value;
    let ck = document.getElementById('ck').value;
    let tb = gk * 0.4 + ck * 0.6
    let kq
    if (tb >= 0 && tb <= 10) {

        if (tb >= 9.1 && tb <= 10) {
            kq = 'học sinh xuất sắc' +tb

        } else if (tb >= 8.1 && tb <= 9) {
            kq = 'học sinh giỏi'+tb


        } else if (tb >= 6.5 && tb <= 8) {
            kq = 'học sinh khá'+tb


        } else if (tb >= 5.1 && tb <= 6.4) {
            kq = 'học sinh trung bình'+tb
        } else if (tb >= 4.0 && tb <= 5.0) {
            kq = 'học sinh yếu'+tb
        } else if (tb <= 4.0) {
            kq = 'học sinh yếu kém'+tb
        }
    }
    else {
        kq = 'không nhập chính xác điểm'
    }
    document.getElementById('tb').innerHTML = kq;
}



