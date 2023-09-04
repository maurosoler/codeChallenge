
  document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombreUsuario = document.getElementById('nombre').value;
    const apellidoUsuario = document.getElementById('apellido').value;
    const fechaNacimientoUsuario = document.getElementById('fechaNacimiento').value;
  
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',

    //  Esta línea establece los encabezados de la solicitud. 
    //  En este caso, se especifica que el tipo de contenido es "application/json", 
    //  lo que indica que los datos enviados al servidor están en formato JSON
      headers: {
        'Content-Type': 'application/json',
      },

    //  Aquí se define el cuerpo de la solicitud, que es la información que se enviará al servidor.
    //  En este caso, se utiliza  JSON.stringify()  para convertir un objeto JavaScript en una 
    //  cadena de texto JSON.
      body: JSON.stringify({
        nombre: nombreUsuario,
        apellido: apellidoUsuario,
        fechaNacimiento: fechaNacimientoUsuario,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  });