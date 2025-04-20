function changeColor(hex) {
    $('#titlebar').css("background-color", hex)
    $('#menubar').css("background-color", hex);
    $('.warning-inner').css("background-color", hex);
}

function blur(status) {
    if (config.blur) {
        if (status) {
            document.getElementById('menubar').classList.add('blur');
            document.getElementById('home').classList.add('blur');
            document.getElementById('app-bettersearch').classList.add('blur');
            document.getElementsByClassName('titlebar')[0].classList.add('blur');
            Array.from(document.getElementsByClassName('browser')).forEach(el => { el.classList.add('blur'); });
        } else {
            document.getElementById('menubar').classList.remove('blur');
            document.getElementById('home').classList.remove('blur');
            document.getElementById('app-bettersearch').classList.remove('blur');
            document.getElementsByClassName('titlebar')[0].classList.remove('blur');
            Array.from(document.getElementsByClassName('browser')).forEach(el => { el.classList.remove('blur'); });
        }
    }
}