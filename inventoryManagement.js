// Write your code here
const products=["Laptop","Phone","Headphones","Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(prodName){
  products.push(prodName);
}

function updateProductName(arrayPosition,newName){
  products.splice(arrayPosition,1,newName);
}

function removeLastProduct(){
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
