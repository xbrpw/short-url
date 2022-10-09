function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5539793727';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin "></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let apellidos = document.querySelector('#apellidos').value
        let email = document.querySelector('#email').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Reservación para Tepozspa del 17 abril con locker + desayuno_*%0A*Mi nombre es: *%0A' + nombre + '%0A*Fecha de cumpleaños: *%0A' + apellidos + '%0A*Email: *%0A' + email + ''
        if (isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        } else {
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp "></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});
$(".box-input input").on("focus", function() {
    $(this).addClass("focus");
});

$(".box-input input").on("blur", function() {
    if ($(this).val() == "") {
        $(this).removeClass("focus");
    }
});

const formulario = document.querySelector('#vestidor17abril2021');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5539793727';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin "></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let apellidos = document.querySelector('#apellidos').value
        let email = document.querySelector('#email').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Reservación para Tepozspa del 17 abril con locker _*%0A*Mi nombre es: *%0A' + nombre + '%0A*Fecha de cumpleaños: *%0A' + apellidos + '%0A*Email: *%0A' + email + ''
        if (isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        } else {
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp "></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});
$(".box-input input").on("focus", function() {
    $(this).addClass("focus");
});

$(".box-input input").on("blur", function() {
    if ($(this).val() == "") {
        $(this).removeClass("focus");
    }
});