$("#nc").click(function(){
  Swal.mixin({
    input: 'text',
    confirmButtonText: 'Siguiente &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3']
  }).queue([
    {
      title: 'Nombre del cliente',
      text: 'campos para agregar nuevo cliente'
    },
    'Nombre del establecimiento',
    'Direccion del establecimiento'
  ]).then((result) => {
    if (result.value) {
      const answers = JSON.stringify(result.value)
      Swal.fire({
        title: 'Cliente agregado!',
        html: `
          datos agregados a la base de datos:
          <pre><code>${answers}</code></pre>
        `,
        confirmButtonText: 'OK!'
      })
    }
  })  
	
	
});

//ejemplo básico
//$("#btn1").click(function(){
  //  Swal.fire('Ejemplo basico de Sweet Alert 2');
//});	

//boton enviar a logistica
$("#btenex").click(function(){
    
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Su reporte ha sido enviado a logistica',
    showConfirmButton: false,
    timer: 2000
  })
	
});	

