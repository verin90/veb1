let fast_button = document.getElementById("fast");
let popup = document.getElementById("popup");
let close_button = document.getElementById("close");

fast_button.addEventListener("click", () =>{
    popup.classList.toggle("show");
})
close_button.addEventListener("click", () =>{
    popup.classList.toggle("show");
})