$(document).on('click', 'a[href^="http"]', function(event) {
    exturl = this.href;
    document.getElementById('warning-external-appname1').innerHTML = refs[app].common
    document.getElementById('warning-external-appname2').innerHTML = refs[app].common
    document.getElementById('warning-external-appname3').innerHTML = refs[app].common
    document.getElementById('warning-external').classList.remove('hide');
});

$('a[target="_blank"]').removeAttr('target');