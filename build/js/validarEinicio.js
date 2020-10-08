
// registro exitoso
$(function(){
    var name;
    $(".accion").on("click", function(){
        name = $(".nombre").val();
        if (name.length == 0) {
            Swal.fire('Los campos no pueden quedar vacios.')

        }else{
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
        
        if ((user == "tihamer" && pass == "123" && opc == "Distribuidora el Sol")) {
            location.href = "index4.html";
        }
        else{
          Swal.fire('usuario o empresa no registrada.')
        }
        if (user.length == 0 || pass.length == 0) {
          Swal.fire('Los campos son obligatorios.')
      }
        return false;
    });
});