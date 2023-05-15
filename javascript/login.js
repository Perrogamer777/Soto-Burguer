function login (){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if ( user == "admin" && password == "1234") {
        alert("Inicio de sesión correcto")
        window.location = "menu.html";
        
    } else {
        alert ("Datos Incorrectos")
    }
}