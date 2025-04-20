function tbClose() {
    if (typeof app != "undefined") {
        if (app == "bettersearch") {
            remote.getCurrentWindow().close();
        } else {
            document.getElementById('warning-exitquit-appname1').innerHTML = refs[app].common
            document.getElementById('warning-exitquit-appname2').innerHTML = refs[app].common
            $("#warning-exitquit").fadeIn(200);
            blur(true);
        }
    } else {
        remote.getCurrentWindow().close();
    }
}

function tbMinimize() {
    remote.getCurrentWindow().minimize();
}

function tbToggleMax() {
    if (remote.getCurrentWindow().isMaximized()) {
        remote.getCurrentWindow().restore();
        document.querySelector('#titlebar-maximize-restore img').src = "../res/titlebar/maximize.svg";
    } else {
        remote.getCurrentWindow().maximize();
        document.querySelector('#titlebar-maximize-restore img').src = "../res/titlebar/restore.svg";
    }
}

window.addEventListener('resize', function(e) {
    if (remote.getCurrentWindow().isMaximized()) {
        document.querySelector('#titlebar-maximize-restore img').src = "../res/titlebar/restore.svg";
    } else {
        document.querySelector('#titlebar-maximize-restore img').src = "../res/titlebar/maximize.svg";
    }
})