var DNI = /^[0-9]{8}[A-Z]$/;


function verifica_dni(){

 var dato = document.getElementById("dni").value;
 var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

 if (!(DNI.test(dato))){
   var nom="<p>";
   var text="Formato de DNI incorrecto(XXXXXXXXA)"
   nom+=text;
   nom+="</p>";
   $("#m_dni").html(nom);
   return false;
 }

 if(dato.charAt(8) != letras[(dato.substring(0, 8))%23]) {
   var nom="<p>";
   var text="Letra introducida no v&aacutelida"
   nom+=text;
   nom+="</p>";
   $("#m_dni").html(nom);
   return false;
 }

}
