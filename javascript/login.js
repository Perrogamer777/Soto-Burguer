// function login (){
//     var user, password

//     user = document.getElementById("usuario").value;
//     password = document.getElementById("contraseña").value;

//     if ( user == "admin" && password == "1234") {
//         alert("Inicio de sesión correcto")
//         window.location = "menu.html";
        
//     } else {
//         alert ("Datos Incorrectos")
//     }
// }






function openLoginForm(){
    document.body.classList.add("showLoginForm");
}

function closeLoginForm(){
    document.body.classList.remove("showLoginForm");
}


