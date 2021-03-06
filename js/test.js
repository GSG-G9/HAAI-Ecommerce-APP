const {
	addProduct,
	removeProduct,
	sellerFilterPrice,
	sellerFilterCategory,
	totalPrice,
	deleteProduct,
	filterProductsByPrice,
	filterProductsByCategory,
	editProduct,
	addProductToCart,
	filterProducts,
} = require("./logic");

test("check jest is working", () => {
	expect(1).toBe(1);
});

describe("Test addProduct Function", () => {
	test("should add input item - first parameter- to array -second parameter", () => {
		const products = [{ id: 1 }, { id: 2 }, { id: 3 }];
		const oneProduct = { id: 4 };
		const actual = addProduct(oneProduct, products);
		const expected = [...products, oneProduct];
		expect(actual).toEqual(expected);
	});

	test("should add input item - first parameter- to array -second parameter even the array is empty", () => {
		const products = [];
		const oneProduct = { id: 1 };
		const actual = addProduct(oneProduct, products);
		const expected = [...products, oneProduct];
		expect(actual).toEqual(expected);
	});
});

//  Seller Remove Product
describe("Test Remove Function", () => {
	test("should add input item - first parameter- to array -second parameter", () => {
		const products = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
		const valueToRemove = { id: 4 };
		const actual = removeProduct(valueToRemove, products);
		const expected = [{ id: 1 }, { id: 2 }, { id: 3 }];
		expect(actual).toEqual(expected);
	});
});

// Seller Price Filter Products
describe("Test filter Price Product Function", () => {
	test("should Fitter itmes by price", () => {
		const products = [
			{ id: 1, price: 25 },
			{ id: 2, price: 55 },
			{ id: 3, price: 105 },
		];
		const item = { price: 60 };
		const actual = sellerFilterPrice(item, products);
		const expected = [
			{ id: 1, price: 25 },
			{ id: 2, price: 55 },
		];
		expect(actual).toEqual(expected);
	});
});

// Seller category Filter Products
describe("Test filter category Product Function", () => {
	test("should Fitter itmes by category", () => {
		const products = [
			{ id: 1, price: 25, catogrey: "men" },
			{ id: 2, price: 55, catogrey: "women" },
			{ id: 3, price: 105, catogrey: "children" },
		];
		const item = { catogrey: "men" };
		const actual = sellerFilterCategory(item, products);
		const expected = [{ id: 1, price: 25, catogrey: "men" }];
		expect(actual).toEqual(expected);
	});
});

// Seller Edit Product Products
describe("Test Edit Product Function", () => {
	test("should Edit itmes ", () => {
		const products = [
			{ id: 1, price: 25, catogrey: "men" },
			{ id: 2, price: 55, catogrey: "women" },
		];
		const item = { id: 1, price: 25, catogrey: "women" };
		const actual = editProduct(item, products);
		const expected = [
			{ id: 1, price: 25, catogrey: "women" },
			{ id: 2, price: 55, catogrey: "women" },
		];
		expect(actual).toEqual(expected);
	});
});

// Buyer Add Product to Cart
describe("Test addProduct to cart Function", () => {
	test("should add input item to cart", () => {
		const products = [{ id: 1 }, { id: 2 }, { id: 3 }];
		const Product = { id: 4 };
		const actual = addProductToCart(Product, products);
		const expected = [...products, Product];
		expect(actual).toEqual(expected);
	});
});

// start of totalPrice function tests
describe("Test totalPrice Function", () => {
	test("it should sum all input prices", () => {
		const cartProducts = [
			{
				name: "balls",
				id: "10001",
				price: 28.58,
			},
			{
				name: "footballs",
				id: "10002",
				price: 30.47,
			},
			{
				name: "backetballs",
				id: "10003",
				price: 10.51,
			},
		];
		const actual = totalPrice(cartProducts);
		const expected = 69.56;
		expect(actual).toEqual(expected);
	});
	test("should return the same input price when there's just a single item in the input array", () => {
		const cartProducts = [
			{
				name: "balls",
				id: "10001",
				price: 28.58,
			},
		];
		const actual = totalPrice(cartProducts);
		const expected = 28.58;
		expect(actual).toEqual(expected);
	});
	test("should return zero when the input array is empty", () => {
		const actual = totalPrice([]);
		const expected = 0;
		expect(actual).toEqual(expected);
	});
});
// end of totalPrice function tests
// start of delete products tests

describe("Test deleteProduct Function", () => {
	test("it should return array without choosen product", () => {
		const cartProducts = [
			{
				name: "balls",
				id: "10001",
				price: 28.58,
			},
			{
				name: "footballs",
				id: "10002",
				price: 30.47,
			},
			{
				name: "backetballs",
				id: "10003",
				price: 10.51,
			},
		];
		const choosenProduct = {
			name: "backetballs",
			id: "10003",
			price: 10.51,
		};
		const actual = deleteProduct(cartProducts, choosenProduct);
		const expected = [
			{
				name: "balls",
				id: "10001",
				price: 28.58,
			},
			{
				name: "footballs",
				id: "10002",
				price: 30.47,
			},
		];
		expect(actual).toEqual(expected);
	});
	test("it should return empty array when the input array contains a single product equals the input", () => {
		const cartProducts = [
			{
				name: "backetballs",
				id: "10003",
				price: 10.51,
			},
		];
		const choosenProduct = {
			name: "backetballs",
			id: "10003",
			price: 10.51,
		};
		const actual = deleteProduct(cartProducts, choosenProduct);
		const expected = [];
		expect(actual).toEqual(expected);
	});
	test("it should return array contains single item equals the input  when the input array contains a single product dosen't equal the input", () => {
		const cartProducts = [
			{
				name: "ball",
				id: "10007",
				price: 10.51,
			},
		];
		const choosenProduct = {
			name: "backetballs",
			id: "10003",
			price: 11.51,
		};
		const actual = deleteProduct(cartProducts, choosenProduct);
		const expected = [
			{
				name: "ball",
				id: "10007",
				price: 10.51,
			},
		];
		expect(actual).toEqual(expected);
	});
	test("it should return empty array when the input array is also empty", () => {
		const cartProducts = [];
		const choosenProduct = {
			name: "backetballs",
			id: "10003",
			price: 11.51,
		};
		const actual = deleteProduct(cartProducts, choosenProduct);
		const expected = [];
		expect(actual).toEqual(expected);
	});
});
// end of delete products tests
// start of filterProductsByCategory function tests
describe("filterProductsByCategory Function tests", () => {
	test("it should return products have the same input category", () => {
		const products = [
			{
				name: "backetballs",
				id: "10003",
				price: 551,
				category: "womens",
			},
			{
				name: "backet",
				id: "10005",
				price: 1.551,
				category: "children",
			},
			{
				name: "backet",
				id: "10005",
				price: 3.51,
				category: "men",
			},
		];

		const actual = filterProductsByCategory(products, "children");
		const expected = [
			{
				name: "backet",
				id: "10005",
				price: 1.551,
				category: "children",
			},
		];
		expect(actual).toEqual(expected);
	});
	test("it should return array eaual to product inputs when all input categories are the same", () => {
		const products = [
			{
				name: "backetballs",
				id: "10003",
				price: 551,
				category: "womens",
			},
			{
				name: "backet",
				id: "10005",
				price: 1.551,
				category: "womens",
			},
			{
				name: "backet",
				id: "10005",
				price: 3.51,
				category: "womens",
			},
		];

		const actual = filterProductsByCategory(products, "womens");
		const expected = products;
		expect(actual).toEqual(expected);
	});
});
// end of filterProductsByCategory function tests
// start of filterProductsByPrice test
describe("filterProductsByPrice Function tests", () => {
	test("it should return products have the same input price", () => {
		const products = [
			{
				name: "backetballs",
				id: "10003",
				price: 551,
				category: "womens",
			},
			{
				name: "backet",
				id: "10005",
				price: 1.551,
				category: "children",
			},
			{
				name: "backet",
				id: "10005",
				price: 3.51,
				category: "men",
			},
		];

		const actual = filterProductsByPrice(products, 1.551);
		const expected = [
			{
				name: "backet",
				id: "10005",
				price: 1.551,
				category: "children",
			},
		];
		expect(actual).toEqual(expected);
	});
	test("it should return array equal to products input when input prices are the same", () => {
		const products = [
			{
				name: "backetballs",
				id: "10003",
				price: 551,
				category: "womens",
			},
			{
				name: "backet",
				id: "10005",
				price: 551,
				category: "children",
			},
			{
				name: "backet",
				id: "10005",
				price: 551,
				category: "men",
			},
		];

		const actual = filterProductsByPrice(products, 551);
		const expected = products;
		expect(actual).toEqual(expected);
	});
});
//end of filter by price test

describe("Test removeProduct Function", () => {
	test("should add input item - first parameter- to array -second parameter", () => {
		const products = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
		const valueToRemove = { id: 4 };
		const prev = removeProduct(valueToRemove, products);
		const next = [{ id: 1 }, { id: 2 }, { id: 3 }];
		expect(prev).toEqual(next);
	});
});
