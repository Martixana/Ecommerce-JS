//product constructor
function fDesign(name, customize, price, image){
	this.name = name
	this.customize = customize
	this.price = price
	this.image = image
}

	//create array of products
	var fruitArray = [
	//create new products with fDesign constructor
	appDesign= new fDesign("Apple Design", true, 28, "img/fruit/apple.gif"),
	banDesign= new fDesign("Banana Design", true, 15, "img/fruit/banana.png"),
	papDesign= new fDesign("Papaya Design", true, 21, "img/fruit/papaya.png"),
	graDesign= new fDesign("Grapes Design", false, 20, "img/fruit/grapes.png"),
	manDesign= new fDesign("Mango Design", true, 22, "img/fruit/mango.jpg"),
	kumDesign= new fDesign("Kumquat Design", false, 30, "img/fruit/kumquat.jpg"),
	cocoDesign= new fDesign("Coconut Design", true, 30, "img/fruit/coconut.jpg"),
	oraDesign= new fDesign("Orange Design", true, 17, "img/fruit/orange.jpg"),
	avoDesign= new fDesign("Avocado Design", false, 28, "img/fruit/avocado.jpg"),
	pomDesign= new fDesign("Pomegranate Design", true, 24, "img/fruit/pomegranate.png"),
	figDesign= new fDesign("Fig Design", true, 32, "img/fruit/fig.jpg"),
	cheDesign= new fDesign("Cherry Design", true, 21, "img/fruit/cherry.png")
	]

	//loop through fruitArray
	for(var i=0; i<fruitArray.length; i++){
		//create new elements for each product
		var newItem=document.createElement("div")
		var newDiv=document.createElement("div")
		var nameH2=document.createElement("h2")
		var customizeH4=document.createElement("h4")
		var priceH4=document.createElement("h4")
		var btn=document.createElement("button")
		var image=document.createElement("img")
	

	//create text to put in elements
	var tName=document.createTextNode(fruitArray[i].name)
	var tPrice=document.createTextNode("Price: $" + fruitArray[i].price)
	var tButton=document.createTextNode("Buy")
	var tCustomize=document.createTextNode(textCustomize)

	function textCustomize(){
		if (fruitArray[i].customize==true)
			 tCustomize=document.createTextNode("Customizable: Yes")
		else if (fruitArray[i].customize==false)
			 tCustomize=document.createTextNode("Customizable: No ")
	}
	textCustomize()



	//update source attribute
	image.src=fruitArray[i].image

	//update class attribute
	image.className="img-responsive"
	btn.className=" btn btn-primary btn-lg"
	newItem.className="col-sm-4 tFruit fruitName " + [i] + " thumbnail"

	//add text to elements
	nameH2.appendChild(tName)
	customizeH4.appendChild(tCustomize)
	priceH4.appendChild(tPrice)
	btn.appendChild(tButton)

	//add elements to new div
	newDiv.appendChild(nameH2)
	newDiv.appendChild(image)
	newDiv.appendChild(customizeH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(btn)

	//app new div to new item div
	newItem.appendChild(newDiv)

	//add new item to element with id="fruits"
	document.getElementById("fruits").appendChild(newItem)
}
