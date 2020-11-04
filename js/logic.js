// Seller - Add new product
function addProduct(product, products) {
	return [...products, product];
}
//buyer - total price function /////////////////iman
function totalPrice(cartProducts){
	return cartProducts.map(item => item.price).reduce((acc, val)=> acc + val , 0)
}
//buyer - delete product /////////////iman
function deleteProduct(cartProducts, choosenProduct){
	return cartProducts.filter(item => item.id !== choosenProduct.id);

}




// Seller - Remove a product

function removeProduct(valueToRemove, products){
	return products.filter((item) => item !== valueToRemove)
}

//Export functions
module.exports = { addProduct, totalPrice, deleteProduct, removeProduct};

