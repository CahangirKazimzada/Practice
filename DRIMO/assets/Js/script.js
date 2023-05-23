const menuBar = document.querySelector(".menu-bar");
const respList = document.querySelector(".resp-list");
const cards = document.querySelector(".cards");

menuBar.addEventListener("click", () => {
    respList.classList.toggle("open-list");
});

fetch("./assets/json/package.json").then(res => res.json()).
then(data => {
    data.forEach(element => {
        createCardBox(element);
    });
});

function createCardBox(el){
    const cardBox = document.createElement("div");
    cardBox.className = "card-box";
    const img = document.createElement("img");
    img.src = el.img;
    const h4 = document.createElement("h4");
    h4.innerText = el.title;
    const p = document.createElement("p");
    p.innerText = el.content;
    cardBox.append(img, h4, p);
    cards.appendChild(cardBox);
}