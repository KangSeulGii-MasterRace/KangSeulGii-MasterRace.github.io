function validatePassword() {
    const password = document.getElementById('password').value;
    const correctPassword = "octubre";  // Puedes cambiar esta contraseña por la que desees
    if (password === correctPassword) {
        window.location.href = "birthday.html";  // Redirige a la página de cumpleaños
        return false;  // Previene el envío del formulario
    } else {
        alert("Contraseña incorrecta, intenta de nuevo.");
        return false;  // Previene el envío del formulario
    }
}
