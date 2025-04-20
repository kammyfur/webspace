const { app, BrowserWindow, session, Menu } = require('electron');
console.log("Loaded Electron Framework");
const datadir = require('./datadir');

const appmenu = Menu;

if (require('fs').existsSync(datadir)) {
    if (require("./dist/ConfigLoader").telemetry) {
        //const Sentry = require('@sentry/electron');
        //Sentry.init({dsn: 'https://af14ae78bb3a47b1a04612e55f5b980f@sentry.io/2100892'});
        console.log("Loaded telemetry service");
    } else {
        console.log("Not loading telemetry service, disabled by user");
    }
} else {
    console.log("Not loading telemetry service, no config");
}

console.log("Preparing window creation...");
function createWindow() {
    console.log("Generating menu...");
    const menuTemplate = [
        {
            label: 'WebSpace',
            submenu: [
                {
                    label: 'DevTools',
                    click: () => {
                        win.toggleDevTools();
                    }
                }
            ]
        }
    ];
    
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                ...details.responseHeaders,
            }
        })
    })
    console.log("Set up security features (XSS prevention)");  

    console.log("Creating window...");

    if (require('os').platform == "win32") {
        console.log("Detected platform: Windows");
        global.win = new BrowserWindow({
            width: 800,  // WARNING: Default window size is overridden by the runtime, this is just loader size
            height: 450, // WARNING: Default window size is overridden by the runtime, this is just loader size
            frame: false,
            title: "Minteck Projects",
            icon: "res/logo.ico",
            webPreferences: {
                nodeIntegration: true,
                webviewTag: true,
		enableRemoteModule: true,
            }
        })
    } else {
        console.log("Detected platform: UNIX/Other");
        global.win = new BrowserWindow({
            width: 800,  // WARNING: Default window size is overridden by the runtime, this is just loader size
            height: 450, // WARNING: Default window size is overridden by the runtime, this is just loader size
            frame: false,
            resizable: true,
            title: "Minteck Projects",
            icon: "res/logo.png",
            webPreferences: {
                nodeIntegration: true,
                webviewTag: true,
		enableRemoteModule: true,
            }
        })
    }

    win.uaVersion = "1.2";
    win.webContents.userAgent = win.webContents.userAgent + " +MPrjApp/" + win.uaVersion;
    console.log("Loaded WebSpace:render " + win.uaVersion);
    win.loadFile('dist/MainWindow.html');
    console.log("Loaded main wrapper");
    win.resizable = true;
    win.focus()
    win.focusOnWebView()
    win.setMenu(null)
    console.log("Decorated window");
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
    console.log("Loaded menu");
}

console.log("Waiting for app...");
app.on('ready', createWindow)
