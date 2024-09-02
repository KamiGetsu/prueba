const boton = document.querySelector("#boton");

const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputCorreo = document.querySelector("#correo");
const inputContrasena = document.querySelector("#contasena");
const inputConfiCon = document.querySelector("#confirmar");

boton.addEventListener("click", () => {

  if (validarNombre() && validarApellido() && validarCorreo() && validarContrasena()) {
    if (validarConfirmarContrasena()) {
      console.log("Usuario registrado");

      const nombre = inputNombre.value;
      const apellido = inputApellido.value;
      const correo = inputCorreo.value;
      const contrasena = inputContrasena.value;

      alert(`Datos del usuario registrado
             Nombre : ${nombre},
             Apellido: ${apellido},
             Correo: ${correo},
             Contraseña:${contrasena},
             `);
    } else {
      console.log("Por favor revise el campo de confirmacion de contraseña");
    }


  }

  
});

function validarNombre() {
  const letrasYEspaciosPattern = /^[a-zA-Z\s]+$/; // Exprecion regular que permite ingresar solo letras y espacios.
  const nombre = inputNombre.value;

  if (!letrasYEspaciosPattern.test(nombre) && !nombre.length <= 50) {
    console.log("Nombre no valido");

    return false;
  }
  console.log("nombre valido");

  return true;
}

function validarApellido() {
  const letrasYEspaciosPattern2 = /^[a-zA-ZñÑ\s]+$/;
  const apellido = inputApellido.value;

  if (!letrasYEspaciosPattern2.test(apellido) && !apellido.length <= 50) {
    console.log("Apellido no valido");
    return false;
  }
  console.log("Apellido valido");
  return true;
}
function validarCorreo() {
  const letrasYEspaciosPattern3 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const correo = inputCorreo.value;

  if (!letrasYEspaciosPattern3.test(correo) && !correo.length <= 50) {
    console.log("Correo no valido");
    return false;
  }
  console.log("Correo valido");

  return true;
}

function validarContrasena() {
  const contrasena = inputContrasena.value;
  console.log(contrasena);

  if (contrasena.length > 10 && contrasena.length <= 50) {
    console.log("Cumple con el tamaño");
    if (validarString(contrasena)) {
      console.log("Cumple con LETRA MINUSCULAR Y MAYUSCULA");
      if (validarNumero(contrasena)) {
        console.log("Cumple con EL NUMERO ");
        if (validarnCaracterEspecial(contrasena)) {
          console.log("Cumple con el CARACTER ESPECIAL");
          return true;
        }
      }
    }
  }
  return false;
}

function validarString(texto) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  if (pattern.test(texto)) {
    return true;
  } else {
    return false;
  }
}
function validarNumero(texto) {
  const pattern = /\d/;

  if (pattern.test(texto)) {
    return true;
  } else {
    return false;
  }
}
function validarnCaracterEspecial(texto) {
  const pattern = /[!@#$%^&*(),.?":{}|<>]/;

  if (pattern.test(texto)) {
    return true;
  } else {
    return false;
  }
}

function validarConfirmarContrasena() {
  const contrasena = inputContrasena.value;
  const confirmar = inputConfiCon.value;
  console.log(confirmar);

  if (contrasena === confirmar) {
    console.log("Contraseñas Iguales");
    return true;
  }
  console.log("Las contraseñas no coinciden");
  return false;
}
