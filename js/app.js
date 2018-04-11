//var test = alert("hola!");
//Input del usuario
var input = prompt("Ingresa los 16 digitos de tu tarjeta \n ***No debes ingresar espacios(\" \"), letras(abC) o caracteres extranios (&%$)");

//****Validacion del input

  for (var j = 0; j < input.length; j++){
    while(input[j] === " " || input === null || input.length === 0 || isNaN(input) || input. length !== 16 ){
       input = prompt("Ingresa los 16 digitos de tu tarjeta \n **Recuerda que no debes ingresar espacios(\" \"), letras(abC) o caracteres extranios (&%$)");
    }
  }

//****Validacion de la tarjeta
function isValidCard (input){
  //convertimos el input a array para poder utilizar el metodo reverse
  var strInput = input.toString();
  //convertimos a array input con split ["2","4"]
  var arrayInput = strInput.split("");
  //volteamos nuestro array
  var invArrayInput= arrayInput.reverse();
  invArrayInput.unshift('s');//consit

  var result = 0;

    for (var i = 1; i<invArrayInput.length; i++){
      var imparIndInput = 0;
      var pairIndResInput = 0;
      var pairIndInput = 0;

       result=imparIndInput + pairIndResInput + pairIndInput;

        if(i % 2 !== 0){
            result += invArrayInput[i];
        }
        else if(i % 2 === 0){
            if(invArrayInput[i]*2>10){
                (invArrayInput[i]-10)+1;
                pairIndResInput += invArrayInput[i];
            }
            else {
                pairIndInput += (invArrayInput[i] * 2);
            }
        }
    }
  if(result % 10 === 0){
      alert("Valida");
  }
  else {
      alert("No es Valida");
  }
}

isValidCard(input);


//NOTAS
//Ref. validacion de entrada http://michelletorres.mx/validar-formularios-con-javascript/
//Ref. split(); https://www.w3schools.com/jsref/jsref_split.asp [ 'How', 'are', 'you', 'doing', 'today?' ]
