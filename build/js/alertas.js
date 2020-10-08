
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
// datos sincronizados
let timerInterval
$("#sincro").click(function () {
  Swal.fire({
    title: 'Sincronizando Datos',
    html: 'Cargando y descargando <strong></strong> archivos.',
    timer: 4333, //tiempo del timer
    onBeforeOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        Swal.getContent().querySelector('strong')
          .textContent = Swal.getTimerLeft()
      }, 100)
    },
    onClose: () => {
      clearInterval(timerInterval)
      Swal.fire({
        type: 'success',
        title: 'Datos Sincronizados',
        text: '¡Perfecto!',
      });
    }
  }).then((result) => {
    if (
      // Read more about handling dismissals
      result.dismiss === Swal.DismissReason.timer
    ) {
      console.log('I was closed by the timer')
    }
  });
});
