var clicker = document.getElementById("cow")
var cow_counter = localStorage.getItem("cow_counter") ? localStorage.getItem("cow_counter")*1 : 0

var cow_counter_text = document.getElementById("counter")
cow_counter_text.innerText = cow_counter


function add_cow() {
    cow_counter++
    localStorage.setItem("cow_counter", cow_counter)

    cow_counter_text.innerText = cow_counter
}

clicker.addEventListener('click', add_cow)

