

let navbar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    if(window.scrollY > 10){
        navbar.classList.add('bg-navbar');
    }else{
        navbar.classList.remove('bg-navbar');
    }
})