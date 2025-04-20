function setAppName(app) {
    document.getElementById('menubar-app-title').innerHTML = app;
}

function switchAppBar(status) {
    if (status) {
        $("#menubar-content-home").fadeOut(200);
        setTimeout(() => {
            $("#menubar-content-app").fadeIn(200);
        }, 200)
    } else {
        $("#menubar-content-app").fadeOut(200);
        setTimeout(() => {
            $("#menubar-content-home").fadeIn(200);
        }, 200)
    }
}

function closeWarning(welnobtn) {
    blur(false);
    $(welnobtn.parentNode.parentNode.parentNode).fadeOut(200);
}