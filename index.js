
const sortearNumber = document.querySelector(".button-sortear")

function generateNumber() {
    const min = Math.ceil(document.querySelector(".min-input").value)
    const max = Math.floor(document.querySelector(".max-input").value)

    const result = Math.floor(Math.random() * (max - min +1)) + min;

    alert(result)
}

sortearNumber.addEventListener("click", generateNumber)
