//var test = alert("hola!");
//Input del usuario
var input = prompt("Ingresa los 16 digitos de tu tarjeta \n ***No debes ingresar espacios(\" \"), letras(abC) o caracteres extranios (&%$)");

//****Validacion del input
while (input.length === undefined || typeOf(input) === !'Number') {
  input = prompt("Ingresa los 16 digitos de tu tarjeta \n **Recuerda que no debes ingresar espacios(\" \"), letras(abC) o caracteres extranios (&%$)")
}



//test 4083952015263
