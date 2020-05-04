;(function(){
    const nav = document.querySelector('.menu')
    const body = document.querySelector('body')
    const btn = document.querySelector('.dropbtn')
    const btnImg = document.querySelector('.dropbtn img')

    nav.style.opacity = "0"

    function navbar(){
        btn.addEventListener("click", function(){
            if (nav.style.opacity === "0") {
                nav.style.opacity = "1"
                body.style.position = "fixed"
                btnImg.setAttribute("src","/images/icon-close.svg")
                
            } else {
                nav.style.opacity = "0"
                body.style.position = "unset"
                btnImg.setAttribute("src","/images/icon-hamburger.svg")
            }
        })
    }
    function init(){
        navbar()
    }
    init()
})()