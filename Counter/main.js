const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const counter = document.querySelector(".counter")
let number = 0;
plus.addEventListener('click', function () {
    number++
    counter.innerHTML = number.toString();
})
minus.addEventListener('click', function () {
    number--
    counter.innerHTML = number.toString();
})
