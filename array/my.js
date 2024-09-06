let x =0;
let array = Array();

function add_array(){
    array[x]=document.getElementById('txtValue').value;
    alert(array[x] +x );
    x++;
    document.getElementById('txtValue').value = '';
}
function add_display(){
    let e ="<hr/>";
    for(let i=0;i<array.length;i++){
        e += i+ array[i] +"<br/>";
    }
    document.getElementById('display').innerHTML = e;
}
