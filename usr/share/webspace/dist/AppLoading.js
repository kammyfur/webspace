scripts = [
    "./WebsiteSelector.js",
    "./WebviewFocusWorkaround.js",
    "./WindowAppbar.js",
    "./Pushbar.js",
    "./BetterSearchIntegration.js",
    "./HeaderColors.js",
    "./AdditionalPages.js",
    "./Settings.js",
    "./WindowTitlebar.js"
]

styles = [
    "./WindowTitlebar.css",
    "./Pushbar.css",
    "./ApplicationMenu.css",
    "./CustomScrollbars.css",
    "./MenuBar.css",
    "./WebsiteSelector.css",
    "./WindowDecorations.css",
    "./ChromeWebview.css",
    "./Warnings.css",
    "./BetterSearch.css",
    "./HeaderColors.css",
    "./PageAbout.css",
    "./PageSettings.css",
    "./Tutorial.css",
    "./Checkboxes.css"
]

// ========================= //

function generateConfig() {
    if (!require('fs').existsSync(datadir)) {
        document.getElementById("loader-app-progress").innerHTML = lang.loading.confgen;
        require('fs').writeFileSync(datadir, require('fs').readFileSync("./webspacerc.conf"));
        setTimeout(() => {
            return;
        }, 1500)
    }
}

function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}

function include(url, callback){
    var script = document.createElement('script');
    script.type = 'text/javascript';

    script.src = url + '?' + (new Date().getTime());

    if (callback) {
        script.onreadystatechange = callback;
        script.onload = script.onreadystatechange;
    }

    document.getElementsByTagName('head')[0].appendChild(script);
}

function cssInclude(url) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
}

function loadScripts() {
    scripts.forEach(el => {
        include(el);
    })
}

function loadStyles() {
    styles.forEach(el => {
        cssInclude(el);
    })
}

function loadSettings() {
    telemetry = document.getElementById('settings-telemetry');
    gfx       = document.getElementById('settings-blur');
    debug     = document.getElementById('settings-debug');
    telemetry.checked = config.telemetry;
    gfx.checked = config.blur;
    debug.checked = config.debug;
    document.getElementById('settings-lang').value = config.lang;
}

function langlist() {
    fs = require('fs');
    langfiles = fs.readdirSync("./i18n");
    llparray = [];
    langfiles.forEach(el => {
        if (el != "langlist.json") {
            if (el.replace(".json", "") == config.lang) {
                pvtmp = "selected ";
            } else {
                pvtmp = "";
            }
            llparray.push("<option " + pvtmp + "value=\"" + el.replace(".json", "") + "\">" + require('../i18n/' + el).$name + "</option>");
            langListPretty = llparray.join("");
            if (document.getElementById('settings-lang')) {
                document.getElementById('settings-lang').innerHTML = langListPretty;
            }
        }
    })
    fs = undefined;
}

function versionCompare(v1, v2, options) {
    var lexicographical = options && options.lexicographical,
        zeroExtend = options && options.zeroExtend,
        v1parts = v1.split('.'),
        v2parts = v2.split('.');

    function isValidPart(x) {
        return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
    }

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
        return NaN;
    }

    if (zeroExtend) {
        while (v1parts.length < v2parts.length) v1parts.push("0");
        while (v2parts.length < v1parts.length) v2parts.push("0");
    }

    if (!lexicographical) {
        v1parts = v1parts.map(Number);
        v2parts = v2parts.map(Number);
    }

    for (var i = 0; i < v1parts.length; ++i) {
        if (v2parts.length == i) {
            return 1;
        }

        if (v1parts[i] == v2parts[i]) {
            continue;
        }
        else if (v1parts[i] > v2parts[i]) {
            return 1;
        }
        else {
            return -1;
        }
    }

    if (v1parts.length != v2parts.length) {
        return -1;
    }

    return 0;
}

function continueSetup() {
    current = meta.version;
    newver  = lastversion;

    if (versionCompare(current, newver) < 0) {
        newversion = true;
    } else {
        newversion = false;
    }

    document.getElementById("loader-app-progress").innerHTML = lang.loading.ui;

    setTimeout(() => {
        // Do UI-related things here
        if (typeof config.tutorial == "undefined") {
            config.tutorial = false;
            confstr = JSON.stringify(config, null, 4);
            require('fs').writeFileSync(datadir, btoa(confstr));
        } else {
            if (config.tutorial == true) {
                $("#loader-app").hide(0);
            }
        }

        new Pushbar({
            blur: config.blur,
            overlay: true
        });
        
        remote.getCurrentWindow().hide();
        document.getElementById("loader-app").classList.add('hide');
        $("#loader-app").hide(0);

        setTimeout(() => {
            remote.getCurrentWindow().show();
            if (newversion) {
                global.updatable = newversion
                if (require('os').platform == "linux") {
                    document.getElementById('about-updates').innerHTML = "<br>" + lang.snapcraft.aboutUpdates;
                } else if (require('os').platform == "win32") {
                    document.getElementById('about-updates').innerHTML = "<br>" + lang.about.updates;
                } else {
                    document.getElementById('about-updates').innerHTML = "<br>" + lang.about.updatesFiles;
                }
                if (require('os').platform == "linux") {
                    $("#warning-update-linux").fadeIn(200);
                } else if (require('os').platform == "win32") {
                    $("#warning-update-win32").fadeIn(200);
                } else {
                    $("#warning-update-other").fadeIn(200);
                }
                blur(true);
            } else {
                global.updatable = false;
            }
        }, 1000)
        setTimeout(() => {
            remote.getCurrentWindow().resizable = true;
            remote.getCurrentWindow().setSize(800, 600);
            remote.getCurrentWindow().center();
            removejscssfile("./LoaderTempDefs.css", "css")
            // titlebarInit()
        }, 200)
    }, 1500)
}

window.onload = () => {
    document.getElementById("loader-app-progress").innerHTML = lang.loading.fonts;
    setTimeout(() => {
        document.getElementById("loader-app-progress").innerHTML = lang.loading.js;
    setTimeout(() => {
        loadScripts()
        generateConfig()
        document.getElementById("loader-app-progress").innerHTML = lang.loading.settings;
        config = require("./ConfigLoader");
        setTimeout(() => {
            document.getElementById("loader-app-progress").innerHTML = lang.loading.meta;
            meta = require('../package.json');
            setTimeout(() => {
                document.getElementById("loader-app-progress").innerHTML = lang.loading.perms;
                require('fs').writeFileSync(require('os').tmpdir() + "/MprjAppTmp");
                require('fs').unlinkSync(require('os').tmpdir() + "/MprjAppTmp");
                setTimeout(() => {
                    document.getElementById("loader-app-progress").innerHTML = lang.loading.style;
                    setTimeout(() => {
                        loadStyles()
                        document.getElementById("loader-app-progress").innerHTML = lang.loading.setuppg;
                        loadSettings()
                        setTimeout(() => {
                            document.getElementById("loader-app-progress").innerHTML = lang.loading.int;
                            setTimeout(() => {
                                document.getElementById("loader-app-progress").innerHTML = lang.loading.langlist;
                                langlist()
                                setTimeout(() => {
                                    document.getElementById("loader-app-progress").innerHTML = lang.loading.updates;
                                    $.ajax({
                                        url: "https://gitlab.com/minteck-projects/webspace-desktop/raw/meta/last_version",
                                        dataType: 'html',
                                        cache: false,
                                        contentType: false,
                                        processData: false,
                                        type: 'get',
                                        timeout: 5000,
                                        success: function (data) {
                                            lastversion = data.trim();
                                            if (config.debug) {
                                                document.getElementById("loader-app-progress").innerHTML = lang.loading.debug;
                                                $("#warning-debug").fadeIn(200);
                                                debugMonitor();
                                            } else {
                                                continueSetup();
                                            }
                                        },
                                        error: () => {
                                            lastversion = meta.version
                                            if (config.debug) {
                                                document.getElementById("loader-app-progress").innerHTML = lang.loading.debug;
                                                $("#warning-debug").fadeIn(200);
                                                debugMonitor();
                                            } else {
                                                continueSetup();
                                            }
                                        }
                                    })
                                }, 500)
                            }, 200)
                        }, 100)
                    }, 600)
                }, 400)
            }, 500)
        }, 300)
    }, 200)
    }, 3000)
}

function debugMonitor() {
    attached = false;
    debugWrapper = setInterval(() => {
        if (remote.getCurrentWindow().isDevToolsOpened()) {
            if (!attached) {
                attached = true;
                $("#warning-adebug").fadeIn(200);
                $("#warning-debug").fadeOut(200);
                document.getElementById('loader-app-progress').innerHTML = strings.loading.adebug;
                setTimeout(() => {
                    $("#warning-adebug").fadeOut(200);
                }, 5000)
            }
        } else {
            if (attached) {
                attached = false;
                $("#warning-debug").fadeOut(200);
                $("#warning-adebug").fadeOut(200);
                $("#warning-ddebug").fadeIn(200);
                setTimeout(() => {
                    document.getElementById('warning-ddebug-message').innerHTML = strings.warnings.ddebug.message.replace("#", "9")+strings.warnings.ddebug.sec1;
                    setTimeout(() => {
                        document.getElementById('warning-ddebug-message').innerHTML = strings.warnings.ddebug.message.replace("#", "8")+strings.warnings.ddebug.sec1;
                        setTimeout(() => {
                            document.getElementById('warning-ddebug-message').innerHTML = strings.warnings.ddebug.message.replace("#", "7")+strings.warnings.ddebug.sec1;
                            setTimeout(() => {
                                document.getElementById('warning-ddebug-message').innerHTML = strings.warnings.ddebug.message.replace("#", "6")+strings.warnings.ddebug.sec1;
                                setTimeout(() => {
                                    document.getElementById('warning-ddebug-message').innerHTML = strings.warnings.ddebug.message.replace("#", "5")+strings.warnings.ddebug.sec1;
                                    setTimeout(() => {
                                        document.getElementById('warning-ddebug-message').innerHTML = strings.warnings.ddebug.message.replace("#", "4")+strings.warnings.ddebug.sec1;
                                        setTimeout(() => {
                                            document.getElementById('warning-ddebug-message').innerHTML = strings.warnings.ddebug.message.replace("#", "3")+strings.warnings.ddebug.sec1;
                                            setTimeout(() => {
                                                document.getElementById('warning-ddebug-message').innerHTML = strings.warnings.ddebug.message.replace("#", "2")+strings.warnings.ddebug.sec1;
                                                setTimeout(() => {
                                                    document.getElementById('warning-ddebug-message').innerHTML = strings.warnings.ddebug.message.replace("#", "1")+strings.warnings.ddebug.sec2;
                                                    setTimeout(() => {
                                                        remote.app.relaunch();
                                                        remote.app.exit();
                                                    }, 1000)
                                                }, 1000)
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }
        }
    }, 50)
}
