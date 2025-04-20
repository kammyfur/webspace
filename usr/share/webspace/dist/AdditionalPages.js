function openSettings() {
    $("#loader").fadeIn(200);

    el   = document.getElementById('settings');
    home = document.getElementById('home');
    
    el.classList.remove('hide');
    home.classList.add('hide');

    $("#menubar-content-home").fadeOut(200);
    setTimeout(() => {
        $("#menubar-content-settings").fadeIn(200);
    }, 200)

    setTimeout(() => {
        $("#loader").fadeOut(200);
    }, 1000)
}

function bthSettings() {
    $("#loader").fadeIn(200);

    el   = document.getElementById('settings');
    home = document.getElementById('home');

    el.classList.add('hide');
    home.classList.remove('hide');

    $("#menubar-content-settings").fadeOut(200);
    setTimeout(() => {
        $("#menubar-content-home").fadeIn(200);
    }, 200)

    setTimeout(() => {
        $("#loader").fadeOut(200);
    }, 1000)
}

function openAbout() {
    $("#loader").fadeIn(200);

    el   = document.getElementById('about');
    home = document.getElementById('home');
    
    el.classList.remove('hide');
    home.classList.add('hide');

    $("#menubar-content-home").fadeOut(200);
    setTimeout(() => {
        $("#menubar-content-about").fadeIn(200);
    }, 200)

    setTimeout(() => {
        $("#loader").fadeOut(200);
    }, 1000)
}

function bthAbout() {
    $("#loader").fadeIn(200);

    el   = document.getElementById('about');
    home = document.getElementById('home');

    el.classList.add('hide');
    home.classList.remove('hide');

    $("#menubar-content-about").fadeOut(200);
    setTimeout(() => {
        $("#menubar-content-home").fadeIn(200);
    }, 200)

    setTimeout(() => {
        $("#loader").fadeOut(200);
    }, 1000)
}