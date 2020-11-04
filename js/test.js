const { addProduct, totalPrice, deleteProduct, filterProducts, removeProduct } = require("./logic"); 


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
// start of totalPrice function tests
describe("Test totalPrice Function", () => {
	test("it should sum all input prices", () => {
		const cartProducts = [{
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
		
		}]
		const actual = totalPrice(cartProducts);
		const expected = 69.56;
		expect(actual).toEqual(expected);
	});
	test("should return the same input price when there's just a single item in the input array", () => {
		const cartProducts = [{
			name: "balls",
			id: "10001",
			price: 28.58,
			
		}]
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
	
	test("it should return array", () => {
		const cartProducts = [{
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
		
		}]
		const choosenProduct = {
			name: "backetballs",
			id: "10003",
			price: 10.51,
		
		}
		const actual = deleteProduct(cartProducts, choosenProduct);
		const expected = [];
		expect(actual).toEqual(expected);
	});
	test("it should return array without choosen product", () => {
		const cartProducts = [{
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
		
		}]
		const choosenProduct = {
			name: "backetballs",
			id: "10003",
			price: 10.51,
		
		}
		const actual = deleteProduct(cartProducts, choosenProduct);
		const expected = [{
			name: "balls",
			id: "10001",
			price: 28.58,
			
		},
		{
			name: "footballs",
			id: "10002",
			price: 30.47,
		
		}];
		expect(actual).toEqual(expected);
	});
	test("it should return empty array when the input array contains a single product equals the input", () => {
		const cartProducts = [{
			name: "backetballs",
			id: "10003",
			price: 10.51,
		
		}]
		const choosenProduct = {
			name: "backetballs",
			id: "10003",
			price: 10.51,
		
		}
		const actual = deleteProduct(cartProducts, choosenProduct);
		const expected = [];
		expect(actual).toEqual(expected);
	});
	test("it should return array contains single item equals the input  when the input array contains a single product dosen't equal the input", () => {
		const cartProducts = [{
			name: "ball",
			id: "10007",
			price: 10.51,
		
		}]
		const choosenProduct = {
			name: "backetballs",
			id: "10003",
			price: 11.51,
		
		}
		const actual = deleteProduct(cartProducts, choosenProduct);
		const expected = [{
			name: "ball",
			id: "10007",
			price: 10.51,
		
		}];
		expect(actual).toEqual(expected);
	});
	test("it should return empty array when the input array is also empty", () => {
		const cartProducts = []
		const choosenProduct = {
			name: "backetballs",
			id: "10003",
			price: 11.51,
		
		}
		const actual = deleteProduct(cartProducts, choosenProduct);
		const expected = [];
		expect(actual).toEqual(expected);
	});



});
// end of delete products tests

describe("Test removeProduct Function", () => {
	test("should add input item - first parameter- to array -second parameter", () => {
		const products = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
		const valueToRemove = { id: 4 }
		const prev = removeProduct(valueToRemove, products);
		const next = products.filter((item) => item !== valueToRemove);
		expect(prev).toEqual(next);
	});

});
