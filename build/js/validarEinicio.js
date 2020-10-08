
// registro exitoso
$(function(){
    var name, ras, id, email, passwd;
    $(".accion").on("click", function(){
        name = $(".nombre").val();
        ras = $(".razon").val();
        id = $(".nit").val();
        email = $(".mail").val()
        passwd = $(".passw").val();
        if (name.length == 0 || ras.length == 0 || id.length == 0 || email.length == 0 || passwd.length == 0) {
            Swal.fire('Los campos no pueden quedar vacios.')

        }
        else{
            Swal.fire({
                type: 'success',
                title: 'success',
                text: '¡Registro Exitoso!',
            });
        }
    });
});

// contraseñas de usuario
$(function(){
    var user, pass, opc;
    $(".iniciar").on("click", function(){
        user = $(".usuario").val();
        pass = $(".contraseña1").val();
        opc = $(".opciones").val();
        
        if ((user == "Tihamer" && pass == "distri1" && opc == "Distribuidora el Sol")) {
            location.href = "index4.html";
        }
        if ((user == "Juan" && pass == "distri2" && opc == "Distribuidora el Sol")) {
            location.href = "indexLogistico.html";
        }
        if ((user == "Deyvid" && pass == "distri3" && opc == "Distribuidora el Sol")) {
            location.href = "Administrador.html";
        }
        if ((user == "Miguel" && pass == "distri4" && opc == "Distribuidora el Sol")) {
            location.href = "Modulo ventas.html";
        }
        if (user.length == 0 || pass.length == 0) {
            Swal.fire('Los campos son obligatorios.');
        }
        else{
          Swal.fire('usuario o empresa no registrada.')
        }
        return false;
    });
});