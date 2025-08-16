document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioContacto');
  
    
  
      // Captura los valores de los campos
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const curso = document.getElementById('curso').value;
      const mensaje = document.getElementById('mensaje').value;
  
      // Muestra los valores en la consola
      console.log("Formulario enviado:");
      console.log("Nombre:", nombre);
      console.log("Correo:", email);
      console.log("Curso elegido:", curso);
      console.log("Mensaje:", mensaje);
    });
  