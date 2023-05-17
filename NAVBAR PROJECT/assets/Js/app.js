const cards = document.querySelector(".cards");



fetch("https://northwind.vercel.app/api/customers").
then(res => res.json()).
then((data) => {
    data.forEach(element => {
        createElement(element);
    });
});

function createElement(el){
    const cardBox = document.createElement("div");
    cardBox.className = "card-box"
    const name = document.createElement("h2");
    name.className = "name";
    name.innerText = el.companyName;
    const workName = document.createElement("div");
    workName.className = "work-name"
    workName.innerText = el.contactTitle;
    const content = document.createElement("div");
    content.className = "content";
    content.innerText = el.address.country;
    const img = document.createElement("div");
    img.className = "img";
    cardBox.append(img, name, workName, content);
    cards.append(cardBox);
}