var clicker = document.getElementById("cow")
var cow_counter_text = document.getElementById("teller")
var cow_counter = 0

function add_cow() {
    cow_counter++
    cow_counter_text.innerHTML = cow_counter
}

clicker.addEventListener('click', add_cow)

