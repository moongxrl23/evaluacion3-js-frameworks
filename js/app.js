$(document).ready(function () {
    if ($('#tablaUsuarios').length) {
        inicializarDataTables();
    }
    if ($('#formUsuario').length) {
        inicializarFormulario();
    }
});

function inicializarDataTables() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            let usuarios = data.map(user => {
                return [
                    user.name,
                    user.username,
                    user.email,
                    user.website
                ];
            });
            $('#tablaUsuarios').DataTable({
                data: usuarios,
                language: {
                    url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json'
                },
                responsive: true
            });
        },
        error: function (error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

function inicializarFormulario() {
    const $form = $('#formUsuario');

    $form.on('submit', function (e) {
        e.preventDefault();

        if (validarFormulario()) {
            alert("¡Envío de datos correcto! (Simulación completada con éxito)");            
            limpiarFormulario();
            window.location.href = 'index.html';
        }
    });

    $('#btnCancelar').on('click', function () {
        limpiarFormulario();
    });
}

function validarFormulario() {
    let esValido = true;

    const $nombre = $('#nombre');
    if ($nombre.val().trim() === "") {
        marcarInvalido($nombre);
        esValido = false;
    } else {
        marcarValido($nombre);
    }
    const $username = $('#username');
    if ($username.val().trim() === "") {
        marcarInvalido($username);
        esValido = false;
    } else {
        marcarValido($username);
    }
    const $fecha = $('#fecha');
    if ($fecha.val() === "") {
        marcarInvalido($fecha);
        esValido = false;
    } else {
        marcarValido($fecha);
    }
    const $email = $('#email');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ($email.val().trim() === "" || !regexEmail.test($email.val().trim())) {
        marcarInvalido($email);
        esValido = false;
    } else {
        marcarValido($email);
    }
    const $sitioWeb = $('#sitioWeb');
    const urlVal = $sitioWeb.val().trim();
    if (urlVal !== "") {
        const regexUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!regexUrl.test(urlVal)) {
            marcarInvalido($sitioWeb);
            esValido = false;
        } else {
            marcarValido($sitioWeb);
        }
    } else {
        marcarValido($sitioWeb);
    }
    return esValido;
}

function marcarInvalido($elemento) {
    $elemento.addClass('is-invalid').removeClass('is-valid');
}

function marcarValido($elemento) {
    $elemento.addClass('is-valid').removeClass('is-invalid');
}

function limpiarFormulario() {
    const $form = $('#formUsuario');
    $form[0].reset();
    $form.find('.form-control').removeClass('is-invalid is-valid');
}

function inicializarFormulario() {
    const $form = $('#formUsuario');
    $form.on('submit', function (e) {
        e.preventDefault();
        if (validarFormulario()) {        
            const nuevoUsuario = {
                nombre: $('#nombre').val().trim(),
                username: $('#username').val().trim(),
                fecha: $('#fecha').val(),
                email: $('#email').val().trim(),
                website: $('#sitioWeb').val().trim()
            };
            console.log("Datos capturados con éxito:", nuevoUsuario);            
            alert("¡Envío de datos correcto! El registro ha sido simulado con éxito.");            
            limpiarFormulario();
            window.location.href = 'index.html';
        }
    });

    $('#btnCancelar').on('click', function () {
        limpiarFormulario();
    });
}

function validarFormulario() {
    let esValido = true;
    const $nombre = $('#nombre');
    if ($nombre.val().trim() === "") {
        marcarInvalido($nombre);
        esValido = false;
    } else {
        marcarValido($nombre);
    }
    const $username = $('#username');
    if ($username.val().trim() === "") {
        marcarInvalido($username);
        esValido = false;
    } else {
        marcarValido($username);
    }
    const $fecha = $('#fecha');
    if ($fecha.val() === "") {
        marcarInvalido($fecha);
        esValido = false;
    } else {
        marcarValido($fecha);
    }
    const $email = $('#email');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ($email.val().trim() === "" || !regexEmail.test($email.val().trim())) {
        marcarInvalido($email);
        esValido = false;
    } else {
        marcarValido($email);
    }
    const $sitioWeb = $('#sitioWeb');
    const urlVal = $sitioWeb.val().trim();
    if (urlVal !== "") {
        const regexUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!regexUrl.test(urlVal)) {
            marcarInvalido($sitioWeb);
            esValido = false;
        } else {
            marcarValido($sitioWeb);
        }
    } else {
        marcarValido($sitioWeb); 
    }
    return esValido;
}

function marcarInvalido($elemento) {
    $elemento.addClass('is-invalid').removeClass('is-valid');
}
function marcarValido($elemento) {
    $elemento.addClass('is-valid').removeClass('is-invalid');
}
function limpiarFormulario() {
    const $form = $('#formUsuario');
    $form[0].reset();
    $form.find('.form-control').removeClass('is-invalid is-valid');
}