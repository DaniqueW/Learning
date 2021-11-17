let clicker = document.getElementById("cow")
let cow_counter = localStorage.getItem("cow_counter") ? localStorage.getItem("cow_counter")*1 : 0
let shop_items = [
    {
        name: "Baguette",
        effect: "Double clicks",
        image: "./images/shop_items/baguette.png",
        price: 4
    },
    {
        name: "Apple",
        effect: "free click p/s",
        image: "./images/shop_items/apple.png",
        price: 15 
    }
]

let cow_counter_text = document.getElementById("counter")
cow_counter_text.innerText = cow_counter

function add_cow(amount) {
    cow_counter+=amount
    localStorage.setItem("cow_counter", cow_counter)

    cow_counter_text.innerText = cow_counter
}

clicker.addEventListener('click', () => add_cow(1))

shop_items.forEach(create_product_element)

function create_product_element(product) {
    let wrapper = document.createElement("div")
    let para = document.createElement("p")
    let magic = document.createElement("p")
    magic.classList.add('effect')
    let pic = document.createElement("img")
    let price = document.createElement("p")
    wrapper.classList.add("product")
    para.innerText = product.name
    magic.innerText = product.effect
    pic.src = product.image
    pic.alt = product.name
    price.innerText = product.price + " clicks"
    let element = document.getElementById("shop")
    let purchased_element = document.getElementById("purchased")
    wrapper.append(para, magic, pic, price)

    wrapper.addEventListener('click', function purchase() {
        if(cow_counter>=product.price){
            add_cow(-product.price)
            purchased_element.appendChild(wrapper)
            wrapper.removeEventListener('click', purchase)
        }else {
            alert("Not enough clicks :(")
        }
    })

    element.appendChild(wrapper)
}

