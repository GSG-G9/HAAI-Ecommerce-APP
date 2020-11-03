const { addProduct } = require("./logic");

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
