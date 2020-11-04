
// Seller - Add new product
function addProduct(product, products) {
	return [...products, product];
}

// Buyer - Add new product to cart
function addProductToCart(product, products) {
	return [...products, product];
}

// Seller - Remove a product

function removeProduct(valueToRemove, products){
	return products.filter((item) => item.id !== valueToRemove.id)
};




// Add Products information

function editProduct(edited, products) {
	let newProducts = products.filter((item) => item.id !== edited.id);
	return [edited, ...newProducts];
}

// Seller Filter Price
function sellerFilterPrice(items, products) {
	return products.filter((item)=>( item.price <= items.price))
};

// Seller Filter category
function sellerFilterCategory(items, products) {
	return products.filter((item)=>( item.catogrey === items.catogrey))
};


//buyer - total price function /////////////////iman
function totalPrice(cartProducts){
	return cartProducts.map(item => item.price).reduce((acc, val)=> acc + val , 0)
}
//buyer - delete product /////////////iman
function deleteProduct(cartProducts, choosenProduct){
	return cartProducts.filter(item => item.id !== choosenProduct.id);

}






//Export functions
	module.exports = { addProduct, totalPrice, deleteProduct, removeProduct,sellerFilterPrice , sellerFilterCategory , editProduct, addProductToCart}