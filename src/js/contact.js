let arrContacto = [];
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar recarga de página
    document.getElementById('formRespuesta').style.display = 'block';
    let objContacto = [{name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        msg: document.getElementById('message').value,}];
    arrContacto.push(objContacto);
    console.log(arrContacto);
    this.reset(); // Limpiar el formulario

    setTimeout(() => {
        document.getElementById('formRespuesta').style.display = 'none';
    }, 5000);
});

