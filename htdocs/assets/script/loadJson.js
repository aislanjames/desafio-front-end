

function loadJSON(callback) {

    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', 'data.json', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == "200") {
            callback(req.responseText);
        }
    };
    req.send(null);
}

function lerJson() {
    loadJSON(function (response) {

        var actual_JSON = JSON.parse(response);
        document.getElementById('json').innerHTML = response;
    });
}

function limparJson() {
    document.getElementById('json').innerHTML = '';
}
