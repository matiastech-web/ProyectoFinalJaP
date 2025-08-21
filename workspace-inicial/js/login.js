function login() {
    const username = document.getElementById('usuario').value.trim();
    const password = document.getElementById('contraseña').value.trim();
    if (username === '' || password === '') {
        alert('Completar todos los campos');
        return;
    }

        alert('Bienvenido ' + username);
        return true;
    

}
