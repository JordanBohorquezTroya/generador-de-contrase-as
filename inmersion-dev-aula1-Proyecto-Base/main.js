let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let mostrar = document.getElementById("contrasena");
let borrar = document.getElementById("limpiar");
const divMostrar = document.getElementById("mostrarSeguridad");
const alertMostrar = document.getElementById("mostrarAlerta");


const caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()"

function generarContraseña(){
    alertMostrar.innerHTML = ""; 
    divMostrar.innerHTML = "";
    let numeroDigitado = (parseInt(cantidad.value));
    if (isNaN(numeroDigitado) || numeroDigitado <= 0) {
        const alerta = document.createElement('h2');
        alerta.textContent = "No se ha agregado un número válido.";
        alerta.style.color = "red";
        alertMostrar.appendChild(alerta);
      
        mostrar.value = "";
        return;
    }
    if (numeroDigitado < 6) {
        const alerta = document.createElement('h2');
        alerta.textContent = "Debe ser mayor que 5 caracteres";
        alerta.style.color = "red";
        alertMostrar.appendChild(alerta);
       
        mostrar.value = "";
        return;
    }
    let password = ""
    for(let i = 0; i < numeroDigitado; i++){
        let caracterAleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];
        password += caracterAleatorio
    }
    mostrar.value = password
    mostraSeguridad(password)

   

    
};


function limpiarContraseña(){
    borrar = mostrar
    borrar.value = ""
    divMostrar.innerHTML = ""
    alertMostrar.innerHTML=""
    cantidad.value = ""
}


function mostraSeguridad(password) {
    divMostrar.innerHTML = ""; 
    let regexSegura = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{6,}$/;
    if (regexSegura.test(password)) {
        const validacionExitosa = document.createElement('h2');
        validacionExitosa.textContent = "Segura";
        validacionExitosa.style.color = "green"; 
        divMostrar.appendChild(validacionExitosa); 
        
    } else {
        const validacionFracasada = document.createElement('h2');
        validacionFracasada.textContent = "Insegura";
        validacionFracasada.style.color = "red"; 
        divMostrar.appendChild(validacionFracasada); 
    }
}




