// Seller - Add new product
function addProduct(product, products) {
	return [...products, product];
}


// Seller - Remove a product

function removeProduct(valueToRemove, products){
	return products.filter((item) => item !== valueToRemove)
}

//Export functions
module.exports = { addProduct,removeProduct };
