
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

