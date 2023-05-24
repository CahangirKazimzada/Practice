const openList = document.querySelector(".open-list");
const menuBar = document.querySelector(".menu-bar");
const x = document.querySelector(".x");

menuBar.addEventListener("click", () => {
    openList.classList.toggle("open-list-block")
});
x.addEventListener("click", () => {
    openList.classList.remove("open-list-block");
})


console.log(menuBar);
const cards = document.querySelectorAll(".cards")[1];

fetch("./assets/json/package.json").then(res => res.json()).
then(data => {
    data.forEach(element => {
        createCards(element);
    });
});

function createCards(el) {
    const cardBox = document.createElement("div");
    cardBox.className = "card-box";
    const img = document.createElement("img");
    img.src = el.img;
    const date = document.createElement("div");
    date.innerText = el.date;
    const content = document.createElement("div");
    content.innerText = el.content;
    cardBox.append(img, date, content);
    cards.append(cardBox);
}