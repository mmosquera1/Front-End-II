/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {

    // suludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    // guardamos en una variable en nombre ingresado 
    let nombre = "";
    do{
        nombre = prompt("Ingese su nombre por favor, debe ser con letras y tener al menos 3 caracteres:");
    }while(nombre.length < 3 || !isNaN(nombre));
        nombre = nombre.toUpperCase();
    
    alert("Gracias por jugar "+nombre + ", que disfrutes el juego.");
    console.log("----------------");
    console.log("El nombre del usuario es: ");   
    console.log(nombre);
    console.log("----------------");
 
    return nombre;
 
 }
 
 // creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
 const nombreJugador = iniciarJuego();
 
 /* -------------------------------------------------------------------------- */
 /*                          CONSIGNA MESA DE TRABAJO                          */
 /* -------------------------------------------------------------------------- */
 // 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
 // 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
 // 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.
 