var login = document.getElementById("login");
var salir = document.getElementById("salir");
var registrarse = document.getElementById("registrarse");
var labelusuario = document.getElementById("labelusuario")
// -----------------------  Funciones uwu-----------------
function registroUsuario(){
    let user = prompt("Registra su usuario")
    let pass = prompt("Registra tu password")
    localStorage.setItem('usuario', user)
    localStorage.setItem('clave', pass)
    alert("registro completo")
}
function loginUsuario() {
    let user = prompt("Escribe tu usuario")
    let pass = prompt("Esbribe tu password")
    //Buscar los datos en el local Strorage
    if (user == localStorage.getItem('usuario')   && pass == localStorage.getItem('clave')) {
        alert("Login exitoso");
        labelusuario.innerHTML = user;
    } else {
        alert("error en el login")
    }
}
function salirPagina() {
    //1 - Poner vacia la variable user (usuario)
    let user = "";
    localStorage.setItem('usuario' , user);
    //2 - Poner vacio la viariable pass (clave)
    let pass ="";
    localStorage.setItem('clave' , pass);
    //3 - labelUsuario lo va poner vacio user
    labelusuario.innerHTML= user;

}

//----------- Usuario en sesion---------------------
if (localStorage.getItem('usuario')) {
    let usuarioStorage = localStorage.getItem('usuario')
    labelusuario.innerHTML= usuarioStorage
} 



// ----------------------- Onclicks OwO----------------

login.onclick = function(){
    //funcion para login
    loginUsuario();
}
salir.onclick = function(){
    //funcion para salir
    salirPagina();
}
registrarse.onclick = function(){
    //funcion para registrarse
    registroUsuario();
}