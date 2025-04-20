function openApp(appName) {
    document.getElementById('menubar-app-back').style.display = "initial";
    document.getElementById('menubar-app-quit').style.display = "initial";
    $("#loader").fadeIn(200);

    if (!document.getElementById('app-' + appName)) {
        alert("ReferenceError: 'app-" + appName + "' inline element cannot be found");
        return;
    }
    if (!document.getElementById('app-' + appName + '-webview')) {
        alert("ReferenceError: 'app-" + appName + "' don't have a child webview element");
        return;
    }
    if (!refs[appName]) {
        alert("ReferenceError: " + appName + " don't have a reference in ApplicationsReferences.json file");
        return;
    }

    el   = document.getElementById('app-' + appName);
    view = document.getElementById('app-' + appName + '-webview');
    home = document.getElementById('home');
    app  = appName;

    $.ajax({
        url: refs[appName].main,
        dataType: 'html',
        cache: false,
        contentType: false,
        processData: false,
        type: 'get',
        success: function (data) {
            el.classList.remove('hide');
            home.classList.add('hide');
            view.src = refs[appName].main
            view.clearHistory();
            setAppName(refs[appName].common)
            switchAppBar(true)
            changeColor(refs[appName].color)
            window.focus()
            view.focus()

            view.onloadstart = () => {
                if (view) {
                    if (!view.src.includes(refs[app].match) && !view.src.includes("about:blank")) {
                        if (view.canGoBack()) {
                            view.goBack();
                        }
                        exturl = view.src;
                        document.getElementById('warning-external-appname1').innerHTML = refs[app].common
                        document.getElementById('warning-external-appname2').innerHTML = refs[app].common
                        document.getElementById('warning-external-appname3').innerHTML = refs[app].common
                        $("#warning-external").fadeIn(200);
                        blur(true);
                    }
                }
            }
        
            view.onmouseenter = () => {
                view.focus()
            }
        
            view.onpointerenter = () => {
                view.focus()
            }
        
            view.addEventListener("click", () => { view.focus(); });
            view.addEventListener("pointerenter", () => { view.focus(); });
            view.addEventListener("mouseenter", () => { view.focus(); });
            view.addEventListener("loadstart", () => { view.focus(); });
            view.addEventListener("loadstop", () => { view.focus(); });
        
            setTimeout(() => {
                $("#loader").fadeOut(200);
            }, 1000)
        },
        error: () => {
            setTimeout(() => {
                $("#loader").fadeOut(200);
                $("#warning-offline").fadeIn(200);
                blur(true);
            }, 1000)
        }
    })
}

function backToHome() {
    if (typeof view != "undefined" && typeof view != "null") {
        if (typeof view == "object" && view == null) {
            document.getElementById('warning-exit-appname1').innerHTML = refs[app].common
            document.getElementById('warning-exit-appname2').innerHTML = refs[app].common
            $("#warning-exit").fadeIn(200);
            blur(true);
        } else {
            if (view.canGoBack()) {
                view.goBack();
                window.focus()
                view.focus()
            } else {
                document.getElementById('warning-exit-appname1').innerHTML = refs[app].common
                document.getElementById('warning-exit-appname2').innerHTML = refs[app].common
                $("#warning-exit").fadeIn(200);
                blur(true);
            }
        }
    } else {
        document.getElementById('warning-exit-appname1').innerHTML = refs[app].common
        document.getElementById('warning-exit-appname2').innerHTML = refs[app].common
        $("#warning-exit").fadeIn(200);
        blur(true);
    }
}

function exitConfirm() {
    $("#warning-exit").fadeOut(200);
    blur(false);
    $("#loader").fadeIn(200);

    el   = document.getElementById('app-' + app);
    view = document.getElementById('app-' + app + '-webview');
    home = document.getElementById('home');

    el.classList.add('hide');
    home.classList.remove('hide');
    switchAppBar(false)
    window.focus()
    if (typeof view != "undefined" && typeof view != "null") {
        if (typeof view == "object" && view == null) {} else {
            view.src = "about:blank"
        }
    }

    setTimeout(() => {
        $("#loader").fadeOut(200);
    }, 1000)

    setTimeout(() => {
        changeColor(refs["default"].color)
    }, 200)
}

function bthQuit() {
    if (app == "bettersearch") {
        exitConfirm();
    } else {
        document.getElementById('warning-exit-appname1').innerHTML = refs[app].common
        document.getElementById('warning-exit-appname2').innerHTML = refs[app].common
        $("#warning-exit").fadeIn(200);
        blur(true);
    }
}