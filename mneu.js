const toggleTag = document.querySelector("a.toggle-nav")

const mainTag = document.querySelector("main")

toggleTag.addEventListener("click",function(){

    mainTag.classList.toggle("open")
})