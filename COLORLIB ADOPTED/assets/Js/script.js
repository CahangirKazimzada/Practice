const menuBar = document.querySelector(".menu-bar");
const respList = document.querySelector(".resp-list");

menuBar.addEventListener("click", () => {
    respList.classList.toggle("open")
})