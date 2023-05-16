const menuIcon = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closeIcon = document.querySelector(".fa-x");
const opacity = document.querySelector(".opacity");
const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")
const openList = document.querySelector(".openList");
const sublist = document.querySelector(".sublist");
console.log(btn);

menuIcon.addEventListener("click", () => {
    sidebar.style.width = "300px";
    opacity.style.display = "block";
})
closeIcon.addEventListener("click", () => {
    sidebar.style.width = "0";
    opacity.style.display = "none";
})

btn.addEventListener("click", () => {
    openList.classList.toggle("closeList");
    btn.classList.toggle("rotate");
})
btn2.addEventListener("click", () => {
    sublist.classList.toggle("sublist-open")
    btn2.classList.toggle("rotate");
})