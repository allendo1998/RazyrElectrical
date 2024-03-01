const selector = () => {
    var qs = new URLSearchParams(window.location.search);
    var service = qs.get("service");

    if(service != null) {
        var option = document.getElementById(service);
        option.setAttribute('selected', true);
    }
}



selector();