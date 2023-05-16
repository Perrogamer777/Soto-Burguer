function validarCorreo (correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(correo);

    if(esValido==true){
        alert('Correo ingresado correctamente :)')

    }
    else{
        alert('El correo ingresesado es no es válido :( Intente nuevamente')
    }

 }