let section_2 = document.getElementById('section_2');
let order = document.getElementById("order");
let hide = document.getElementById("hide");

order.addEventListener("click", () =>{
    section_2.classList.toggle("show");
    order.classList.toggle("hide");
    hide.classList.toggle("hide");
})