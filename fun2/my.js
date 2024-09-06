let product =[];
function addProduct() {
    let add= document.getElementById('add').value;
    product.push(add);

 console.log(product);
}

function removeProduct() {
    let remove= document.getElementById('remove').value;
    product.splice(remove, 1);

}
function editProduct() {
    let edit= document.getElementById('edit').value;
    product.splice(edit, 1);
}


let display ;
function displayProduct() {
   for (let i = 0; i < product.length; i++) {
      display = product[i].value;

   }
}
document.getElementById("display").innerHTML = display;