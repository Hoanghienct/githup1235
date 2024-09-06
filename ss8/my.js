function timx() {
    let na = document.getElementById('a')
    let nb = document.getElementById('b')
    let soa=na.value
    let sob=nb.value
    let timx
    if (soa==0 &&sob==0){
        timx=document.write('ptvsn')
    }
    else if (soa==0 ){
        timx=document.write("ptvn")
    }

    else {
        timx = 0- (sob / soa)}

    document.getElementById('result').innerHTML = timx;
}
function a(){
    let tg = +document.getElementById("tg").value;
    switch(tg){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        {
            document.getElementById('a').innerHTML = 'tháng có 31 ngày';
        }
            break;
        case 2:{
            document.getElementById('a').innerHTML = 'tháng có 28 ngày';
        }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
        {
            document.getElementById('a').innerHTML = 'tháng có 30 ngày';
        }
            break;
        default:{
            document.getElementById('a').innerHTML = 'tháng ko hợp lệ';
        }
    }
}