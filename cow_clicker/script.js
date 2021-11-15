var clicker = document.getElementById("cow")
var cow_counter = localStorage.getItem("cow_counter") ? localStorage.getItem("cow_counter")*1 : 0
var shop_items = [
    {
        name: "Baguette",
        image: "./images/shop_items/baguette.png",
        price: 40
    },
    {
        name: "Apple",
        image: "./images/shop_items/apple.png",
        price: 150 
    }
]

var cow_counter_text = document.getElementById("counter")
cow_counter_text.innerText = cow_counter


function add_cow(amount) {
    cow_counter+=amount
    localStorage.setItem("cow_counter", cow_counter)

    cow_counter_text.innerText = cow_counter
}

clicker.addEventListener('click', () => add_cow(1))

shop_items.forEach(create_product_element)

function create_product_element(product) {
    var wrapper = document.createElement("div")
    var para = document.createElement("p")
    var pic = document.createElement("img")
    var price = document.createElement("p")
    wrapper.classList.add("product")
    para.innerText = product.name
    pic.src = product.image
    pic.alt = product.name
    price.innerText = product.price + " clicks"
    var element = document.getElementById("shop")
    wrapper.append(para, pic, price)
    element.appendChild(wrapper)
    console.log(product)
}

