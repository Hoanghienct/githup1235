let x =[10,11,12,13,14,15,16,17,18,19,20];
function nameF(x){
    x[0]=5;
    return x;
}

nameF(x);
console.log(x);