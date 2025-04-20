function betterSearch() {
    document.getElementById('menubar-app-back').style.display = "none";
    document.getElementById('menubar-app-quit').style.display = "initial";
    $("#loader").fadeIn(200);

    el   = document.getElementById('app-bettersearch');
    home = document.getElementById('home');
    app  = 'bettersearch';

    $.ajax({
        url: "https://better-search.000webhostapp.com",
        dataType: 'html',
        cache: false,
        contentType: false,
        processData: false,
        type: 'get',
        success: function (data) {
            el.classList.remove('hide');
            home.classList.add('hide');
            setAppName(refs['bettersearch'].common)
            changeColor(refs['bettersearch'].color)
            switchAppBar(true)
            window.focus()
        
            setTimeout(() => {
                $("#loader").fadeOut(200);
            }, 1000)
        },
        error: () => {
            setTimeout(() => {
                $("#loader").fadeOut(200);
                $("#warning-offline").fadeIn(200);
            }, 1000)
        }
    })
}

function betterSearchSearch(query, form, loader) {
    form.classList.add('hide');
    loader.classList.remove('hide');

    $.ajax({
        url: "https://better-search.000webhostapp.com/api/search/?q=" + encodeURI(query) + "&lang=auto&region=ww",
        dataType: 'html',
        cache: false,
        contentType: false,
        processData: false,
        type: 'get',
        success: function (data) {
            require('opn')(data.replace("ok=", ""));
        
            setTimeout(() => {
                form.classList.remove('hide');
                loader.classList.add('hide');
            }, 1000)
        },
        error: () => {
            setTimeout(() => {
                form.classList.remove('hide');
                loader.classList.add('hide');
                $("#warning-offline").fadeIn(200);
            }, 1000)
        }
    })
}