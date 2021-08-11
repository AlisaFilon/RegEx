const form = document.getElementById('form');

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const dni = document.getElementById('dni');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const direccion = document.getElementById('direccion');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const dniValue = dni.value.trim();
    const telefonoValue = telefono.value.trim();
    const emailValue = email.value.trim();
    const direccionValue = direccion.value.trim();


    if (nombreValue === '') {
        setErrorFor(nombre, 'Por favor, escriba su Nombre');
    } else {
        setSuccessFor(nombre);
    }


    if (apellidoValue === '') {
        setErrorFor(apellido, 'Por favor, escriba su Apellido');
    } else {
        setSuccessFor(apellido);
    }


    if (dniValue === '') {
        setErrorFor(dni, 'Por favor, escriba su DNI');
    } else {
        setSuccessFor(dni);
    }


    if (telefonoValue === '') {
        setErrorFor(telefono, 'Por favor, escriba su numero Teléfono');
    } else {
        setSuccessFor(telefono);
    }


    if (emailValue === '') {
        setErrorFor(email, 'Por favor, escriba su E-mail');

    } else {
        setSuccessFor(email);
    }


    if (direccionValue === '') {
        setErrorFor(direccion, 'Por favor, escriba su Direccion');
    } else {
        setSuccessFor(direccion);
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;

    formControl.className = 'form-control error';

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


