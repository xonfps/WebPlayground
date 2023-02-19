const ulcreator = document.createElement("ul")
const coins = document.getElementById("coinslist")

ulcreator.classList.add("list")
coins.appendChild(ulcreator)

const coinslista = ["ethereum", "bitcoin", "maiquinique", "tem"]

coinslista.forEach((coin, i) => {
    const licreator = document.createElement("li")
    const listcoins = document.getElementsByClassName("list")
    licreator.innerHTML = coinslista[i]
    listcoins[0].appendChild(licreator)
})
