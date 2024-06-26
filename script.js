const link = document.querySelector("#linkToSoc")
link.addEventListener('click', function(e){
    e.preventDefault
    window.open("https://vk.com")
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const btn = document.querySelector(".header_menu_list_button")
btn.addEventListener('click', function(e){
    const popup = document.querySelector(".popup")
    popup.classList.toggle("open")
})

const cross = document.getElementById("cross")
cross.addEventListener("click", function(e){
    const popup = document.querySelector(".popup")
    popup.classList.toggle("open")
})

const btns = document.querySelectorAll(".readMore_btn")
btns.forEach(function(item, index){
    item.addEventListener("click", function(e){
        const popup = document.querySelector(".popup")
    popup.classList.toggle("open")
    })
})