let burger = document.getElementById('burger'),
    nav= document.getElementById('menu');

burger.addEventListener("click", function(){
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});