function getKey() {
    if (event.keyCode == 13) {
        f();
    }
}

function f() {
    var url = document.getElementById("url").value;
    if (url != "") {
        var prefix = "http://";
        var httpIndex = url.indexOf("http");
        if (httpIndex >= 0) {
            var arr = url.split("://");
            prefix = arr[0] + "://";
            url = arr[1];
        }
        var index = url.indexOf("/");
        var url2 = "";
        var url1 = "";
        if (index >= 0) {
            url1 = url.substring(0, index);
            url2 = url.substring(index);
        } else {
            url1 = url;
        }
        var reg = new RegExp("\\.", "g");
        url1 = url1.replace(reg, "-");
        var portIndex = url1.indexOf(":");
        if (portIndex >= 0) {
            url1 = url1.substring(0, portIndex) + "-" + url1.substring(portIndex + 1) + "-p";
        }
        var url = prefix + url1 + ".ivpn.hit.edu.cn" + url2;
        window.open(url, "_blank");
    }
}