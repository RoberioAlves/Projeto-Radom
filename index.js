
const sortearNumber = document.querySelector(".button-sortear")

function generateNumber() {
    const min = Math.ceil(document.querySelector(".min-input").value)
    const max = Math.floor(document.querySelector(".max-input").value)

    if (min > max) {
        alert("Esse valor não pode ser MAIOR que o valor minimo")
    }

    else {
        const result = Math.floor(Math.random() * (max - min +1)) + min;

    alert(result)
    }
}

sortearNumber.addEventListener("click", generateNumber)
