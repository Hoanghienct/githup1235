function ls() {
    let p =document.getElementById('p').value
    let r = document.getElementById('r').value
    let n = document.getElementById('n').value
    let t = document.getElementById('t').value
    let tien=p*(1+r/n)**(n*t);
    // let tien1=p*Math.pow((1+r/n),(n*t));
    let nt;
    if (t >0.25 ){
        alert('kkk')
       nt = 'nhân được lãi suất :'+tien
    }
    else {
        nt="bạn chưa có lãi"
    }

document.getElementById("tien").innerHTML = nt;

}


