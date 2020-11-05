// Seller - Add new product
function addProduct(product, products) {
	return [...products, product];
}

// Buyer - Add new product to cart
function addProductToCart(product, products) {
	return [...products, product];
}

// Seller - Remove a product

function removeProduct(valueToRemove, products) {
	return products.filter((item) => item.id !== valueToRemove.id);
}

// Add Products information

function editProduct(product, products) {
	return products.map((p) => (p.id === product.id ? product : p));
}

// Seller Filter Price
function sellerFilterPrice(items, products) {
	return products.filter((item) => item.price <= items.price);
}

// Seller Filter category
function sellerFilterCategory(items, products) {
	return products.filter((item) => item.catogrey === items.catogrey);
}

//buyer - total price function /////////////////iman
function totalPrice(cartProducts) {
	return cartProducts
		.map((item) => item.price)
		.reduce((acc, val) => acc + val, 0);
}
//buyer - delete product
function deleteProduct(cartProducts, choosenProduct) {
	return cartProducts.filter((item) => item.id !== choosenProduct.id);
}
//buyer - filter by category
function filterProductsByCategory(products, category) {
	return products.filter((item) => item.category === category);
}
//buyer - filter by price
function filterProductsByPrice(products, price) {
	return products.filter((item) => item.price === price);
}

//Export functions
module.exports = {
	addProduct,
	totalPrice,
	deleteProduct,
	removeProduct,
	sellerFilterPrice,
	sellerFilterCategory,
	editProduct,
	addProductToCart,
	filterProductsByCategory,
	filterProductsByPrice,
};

// module.exports = { addProduct, totalPrice, deleteProduct, filterProductsByCategory, filterProductsByPrice, removeProduct};
