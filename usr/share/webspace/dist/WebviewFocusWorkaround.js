Array.from(document.getElementsByTagName('webview')).forEach((webview) => {
    webview.addEventListener("dom-ready", event => {
        webview.blur();
        webview.focus();
    });
})