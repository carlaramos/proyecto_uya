// importar
var express = require('express');
// instanciar
var servidor = express();
// ruteo
servidor.get('/',function(peticion,respuesta){

	//HAY QUE TENER CUIDADO CON LOS PATHS
	respuesta.sendfile('/Users/Public/mipagina.html');

});
// Aqui arranca el servidor
// Podemos definir arbitrariamente el puerto por el cual deseemos que escuche nuestro servidor
servidor.listen(9000);
// Le ponemos un mensajito en consola
console.log("El servidor escucha en el puerto 9000"); 
