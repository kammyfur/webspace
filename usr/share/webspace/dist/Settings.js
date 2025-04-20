function saveSettings() {
    $("#loader").fadeIn(200);

    telemetry = document.getElementById('settings-telemetry').checked;
    gfx       = document.getElementById('settings-blur').checked;
    debug     = document.getElementById('settings-debug').checked;
    lang      = document.getElementById('settings-lang').value;
    nsettings = {};

    nsettings.lang = lang;
    nsettings.telemetry = telemetry;
    nsettings.blur = gfx;
    nsettings.debug = debug;

    nsettingsstr = JSON.stringify(nsettings, null, 4);
    require('fs').writeFileSync(datadir, btoa(nsettingsstr));

    setTimeout(() => {
        $("#loader").fadeOut(200);
        $("#warning-restart").fadeIn(200);
    }, 750)
}
