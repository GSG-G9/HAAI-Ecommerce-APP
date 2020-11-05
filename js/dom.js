
const productsData = [
	{
		name: "balls",
		id: "10001",
		price: 28.58,
		imgSrc: "/img/sports/balls.jpg",
		owner: "hassan",
		catogrey: "sports",
		// description:'Lorem20' - i think we can use in list view
	},
	{
		name: "footballs",
		id: "10002",
		price: 30.47,
		imgSrc: "/img/sports/footballs.jpg",
		owner: "hassan",
		catogrey: "sports",
	},
	{
		name: "backetballs",
		id: "10003",
		price: 10.51,
		imgSrc: "/img/sports/backetballs.jpg",
		owner: "hassan",
		catogrey: "sports",
	},
	{
		name: "mouses",
		id: "10004",
		price: 12.77,
		imgSrc: "/img/tech/mouses.jpg",
		owner: "hassan",
		catogrey: "tech",
	},
	{
		name: "iphone",
		id: "10005",
		price: 252.5,
		imgSrc: "/img/tech/iphone.jpg",
		owner: "hassan",
		catogrey: "tech",
	},
	{
		name: "keybored",
		id: "10006",
		price: 24.9,
		imgSrc: "/img/tech/keybored.jpg",
		owner: "hassan",
		catogrey: "tech",
	},
	{
		name: "T-shirt",
		id: "10007",
		price: 52.58,
		imgSrc: "/img/clothes/T-shirt.jpg",
		owner: "hassan",
		catogrey: "clothes",
	},
	{
		name: "Shirt",
		id: "10008",
		price: 38.58,
		imgSrc: "/img/clothes/Shirt.jpg",
		owner: "hassan",
		catogrey: "clothes",
	},
	{
		name: "jacket",
		id: "10009",
		price: 98.58,
		imgSrc: "/img/clothes/jacket.png",
		owner: "hassan",
		catogrey: "clothes",
	},
	{
		name: "balls",
		id: "10010",
		price: 49.55,
		imgSrc: "/img/sports/3.jpg",
		owner: "hassan",
		catogrey: "sports",
	},
	{
		name: "balls",
		id: "10011",
		price: 48.9,
		imgSrc: "/img/sports/2.jpg",
		owner: "hassan",
		catogrey: "sports",
	},
	{
		name: "balls",
		id: "10012",
		price: 32.58,
		imgSrc: "/img/sports/1.jpg",
		owner: "hassan",
		catogrey: "sports",
	},
];

const inputName = document.getElementById("p-name")
const inputId = document.getElementById("p-id")
const inputPrice = document.getElementById("p-price")
const inputImg = document.getElementById("p-img")
const inputCat = document.getElementById("p-cat")

function creatProductDiv(product) {
const productDiv = document.createElement("div")
const img = document.createElement("img")
const price = document.createElement("p")
const name = document.createElement("p")
const button = document.createElement("button")

price.innerText = product.price
img.src = product.imgSrc
name.innerText = product.name
button.innerText = "Edit"

button.addEventListener("click",()=>{
	inputName.value = product.name
	inputId.value = product.id
	inputPrice.value = product.price
	inputImg.value = product.imgSrc
	inputCat.value = product.catogrey

})

const submiteButton = document.getElementById("submit-edit")

submiteButton.addEventListener("click",()=>{

	const editProdut ={
						name: inputName.value,
						id: inputId.value,
						price: inputPrice.value,
						imgSrc: inputImg.value,
						owner: "hassan",
						catogrey: inputCat.value,
					}

				products =	editProduct(editProdut,products)
				
})


productDiv.append(img,name,price,button)

return productDiv
}

const productSeller=document.getElementById("seller-products-container")
products.forEach(p => {
	const div = creatProductDiv(p)
	productSeller.appendChild(div)
})

// products  local storage functions
const getProducts = () => JSON.parse(localStorage.getItem("products"));
const setProducts = (products) => localStorage.setItem("products" , JSON.stringify(products));
const removeProducts = () => localStorage.removeItem("products");
// cart local storage functions 
const getCartProducts = () => JSON.parse(localStorage.getItem("cartProducts"));
const setCartProducts = (cartProducts) => localStorage.setItem("cartProducts" , JSON.stringify(cartProducts));
const removeCartProduct = () => localStorage.removeItem("cartProducts");



if(!localStorage.getItem("products")){
	localStorage.setItem("products" , JSON.stringify(productsData))
}
//make empty array in local storage
if(!localStorage.getItem("cartProducts")){
	localStorage.setItem("cartProducts" , JSON.stringify([]))
}
const productContainer = document.getElementById("products-container");
const cartSection = document.getElementById("cart-section");
const totalPriceParagraph= document.getElementById("total-price")


const createComponatDiv = (product) => {

	const productDiv = document.createElement("div");
	const productBuyButton = document.createElement("button")
	const productImageDiv = document.createElement("div");
	const productInfo = document.createElement("div");
	const productImage = document.createElement("img");
	const productName = document.createElement("h2");
	const productPrice = document.createElement("p")
	productDiv.append(productImageDiv , productInfo);
	productImageDiv.appendChild(productImage);
	productInfo.append(productName, productPrice);
	productDiv.appendChild(productBuyButton);

	productName.innerText = product.name;
	productPrice.innerText = product.price;
	productImage.src = product.imgSrc;
	// productDiv.id = product.id;
	productBuyButton.innerText = "Buy";
	//when click on button  add product to cart  local storage
	productBuyButton.addEventListener("click", () => {
		
		setCartProducts(addProduct(product, getCartProducts()));
		getCartProducts().forEach(el => createCartProductDiv(el));
		totalPriceParagraph.innerText =  totalPrice(getCartProducts());


	});
	productContainer.appendChild(productDiv);
	productDiv.classList.add("single-product-div")

}
getProducts().forEach(el => createComponatDiv(el));
const createCartProductDiv = (cartProduct) => {

	const productDiv = document.createElement("div");
	const cartRemoveButton = document.createElement("button")
	const productImageDiv = document.createElement("div");
	const productInfo = document.createElement("div");
	const productImage = document.createElement("img");
	const productName = document.createElement("h2");
	const productPrice = document.createElement("p");

	
	productDiv.append(productImageDiv , productInfo);
	productImageDiv.appendChild(productImage);
	productInfo.append(productName, productPrice);
	productDiv.appendChild(cartRemoveButton);
	productImage.classList.add("product-image")

	productName.innerText = cartProduct.name;
	productPrice.innerText = cartProduct.price;
	productImage.src = cartProduct.imgSrc;
	// productDiv.id = product.id;
	cartRemoveButton.innerText = "remove";
	//when click on button  add product to local storage
	cartRemoveButton.addEventListener("click", () => {
		// removeCartProduct();
	//remove and update to local storage
		setCartProducts(deleteProduct(getCartProducts(), cartProduct));
		[...cartSection.children].forEach(el => el.remove())
		getCartProducts().forEach(el => createCartProductDiv(el));
		totalPriceParagraph.innerText =  totalPrice(getCartProducts());




	});
	cartSection.appendChild(productDiv);
	productDiv.classList.add("cart-product-div")



}

// {
// 	name: "footballs",
// 	id: "10002",
// 	price: 30.47,
// 	imgSrc: "/img/sports/footballs.jpg",
// 	owner: "hassan",
// 	catogrey: "sports",
// }
//////////////////////////////////////////
/* <div class="product" id="10002"> 
<div id="product-image">  
  <img src="/img/sports/footballs.jpg">
</div>
<div class="product-info" >
 <h2></h2> // name
 <p>price: </p>



</div>
  
<!-- {
name: "footballs",//
id: "10002",//
price: 30.47,//
imgSrc: "/img/sports/footballs.jpg",
catogrey: "sports",
} -->

</div> */


