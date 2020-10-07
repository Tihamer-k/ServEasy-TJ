// registro exitoso
$("#Enviar").click(function () {
    Swal.fire({
        type: 'success',
        title: 'success',
        text: '¡Registro Exitoso!',
    });
});
// olvidó contraseña
$("#olvidoPassword ").click(function () {
    Swal.mixin({
        input: 'email', //puede ser text, number, email, password, textarea, select, radio
        showCancelButton: true,
      }).queue([
        {
          title: 'Recuperar Contraseña',
          text: 'Ingrese su Email:'
        }
      ]).then((result) => {
        if (result.value) {
          Swal.fire({
            type: 'success',
        title: 'Correo Enviado',
        text: 'Revise su bandeja de correo para continuar el proceso de recuperación.',
            confirmButtonText: 'Ok'
          })
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
