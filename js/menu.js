var  nav = document.getElementById('nav');

window.onscroll = function(){


    if (window.pageYOffset > 100) {
        // También se cambia "header" en css
        nav.style.background = "rgba(0,0,0,0.5)";
        nav.style.boxShadow = "0 0 10px #000";
    }
    else{
        nav.style.background = "rgba(0,0,0,0.2)";
        nav.style.boxShadow = "none";
    }
}