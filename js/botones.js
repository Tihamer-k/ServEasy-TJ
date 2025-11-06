$("#enviar").click(function(){
    Swal.fire({
        title: '¿Quieres guardar cambios?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Guardar`,
        denyButtonText: `No guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Guardado!', '', 'Satisfactoriamente')
        } else if (result.isDenied) {
          Swal.fire('No quiero guardar los Cambios', '', 'info')
        }
      })
});


