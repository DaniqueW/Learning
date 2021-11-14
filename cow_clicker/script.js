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


function add_cow() {
    cow_counter++
    localStorage.setItem("cow_counter", cow_counter)

    cow_counter_text.innerText = cow_counter
}

clicker.addEventListener('click', add_cow)

shop_items.forEach(create_product_element)

function create_product_element(product) {
    var para = document.createElement("p")
    para.innerText = product.name
    var element = document.getElementById("shop")
    element.appendChild(para)
    console.log(product)
}

