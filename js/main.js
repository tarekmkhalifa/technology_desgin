let up = document.getElementById('up');

window.onscroll = function (){
    if (window.scrollY >= 650 ) {
        up.style.display = 'block';
    }else {
        up.style.display = 'none';
    }
}

up.onclick = function () {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}