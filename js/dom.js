const products = [
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



