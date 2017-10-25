function enviarContacto(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            document.getElementById("mensajeCartel").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "ajaxMensaje.txt", true);
    xhttp.send();
}