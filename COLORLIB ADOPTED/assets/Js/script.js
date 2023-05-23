const menuBar = document.querySelector(".menu-bar");
const respList = document.querySelector(".resp-list");
const lineTitle = document.querySelectorAll(".line-title");
const lineInfo = document.querySelectorAll(".line-info");
const i = document.querySelectorAll(".fa-chevron-down");
const cards = document.querySelector(".cards");

menuBar.addEventListener("click", () => {
    respList.classList.toggle("open")
})

fetch("/assets/Json/package.json").then(res => res.json()).
then(data => {
    data.forEach(element => {
        createCards(element);
    });
});

function createCards(el){
    const cardBox = document.createElement("div");
    cardBox.className = "card-box";
    const img = document.createElement("img");
    img.src = el.img;
    const nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.innerText = el.name;
    cardBox.append(img, nameDiv);
    cards.appendChild(cardBox);
}