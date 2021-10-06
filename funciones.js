  var globalejem = 0;
  var NumInicial = 0;
  var NumFinal = 0;
  var SumaPresionado = false;
  var MultiploPresionado= false;
  var RestaPresionado= false;

  const vaciar = () => {
    document.getElementById("pantalla").value = "";
  }

  const cuadrado = () => {
    let num = document.getElementById("pantalla").value;
    let result = num * num;
    document.getElementById("answer").innerHTML = result;
    vaciar();
  }

  const modulo = () => {
    let num = document.getElementById("pantalla").value;
    if (num>=0){
        document.getElementById("answer").innerHTML = num;     
    }
    else{
        let result= num* (-1);
        document.getElementById("answer").innerHTML = result;
    }
    vaciar()
  }

  const factorial = () => {
    let result = 1;
    let num = document.getElementById("pantalla").value;
    for(i=0; i<=num; i++){
        result = result *i
    }
    document.getElementById("answer").innerHTML = result;
    vaciar()
  }

  const suma  = () => {
    NumInicial = parseFloat(document.getElementById("pantalla").value);
    SumaPresionado = true;
    vaciar();
  }

  const multiplicacion = () => {
    NumInicial = parseFloat(document.getElementById("pantalla").value);
    MultiploPresionado = true;
    vaciar();
  }

  const resta = () => {
    NumInicial = parseFloat(document.getElementById("pantalla").value);
    RestaPresionado = true;
    vaciar();
  }

  const igual = () => {
      if(SumaPresionado == true){
        NumFinal = parseFloat(document.getElementById("pantalla").value);
        var result = NumInicial + NumFinal;
        document.getElementById("answer").innerHTML = result;
        SumaPresionado = True;
      }
      else if(MultiploPresionado == true){
          NumFinal= parseFloat(document.getElementById("pantalla").value);
          let result = NumInicial * NumFinal;
          document.getElementById("answer").innerHTML = result;
          MultiploPresionado = True;
      }
      else if(RestaPresionado == true){
          NumFinal= parseFloat(document.getElementById("pantalla").value);
          let result = NumInicial - NumFinal;
          document.getElementById("answer").innerHTML = result;
          RestaPresionado = True;
    }

  }
  
  const sumatorio = () =>{
  
    let num = document.getElementById("pantalla").value;
    let list = num.split(",");
    ArrayInput = Array.from(list);
    ArrayInput = ArrayInput.map(function (x){
        return parseFloat(x,10);
    })
    let result = ArrayInput.reduce((a,b)=> a+b,0);
    document.getElementById("answer").innerHTML = result;
    vaciar()
  }
  
  const ordenar = () =>{
    let num = document.getElementById("pantalla").value;
    let list = num.split(",");
    ArrayInput = Array.from(list);
    ArrayInput = ArrayInput.map(function (x){
        return parseFloat(x,10);
    })
    let result = ArrayInput.sort((a,b) => a-b);
    document.getElementById("answer").innerHTML = result;
    vaciar();
  }

  const revertir = () =>{
    let num = document.getElementById("pantalla").value;
    let list = num.split(",");
    var ArrayInput = Array.from(list);
    ArrayInput = ArrayInput.map(function (x){
        return parseFloat(x,10);
    })
    let result = ArrayInput.reverse()
    document.getElementById("answer").innerHTML = result;
    vaciar()
  }

  const quitar = () =>{
    let num = document.getElementById("pantalla").value;
    let list = num.split(",");
    ArrayInput = Array.from(list);
    ArrayInput = ArrayInput.map(function (x){
        return parseFloat(x,10);
    })
    ArrayInput.pop()
    document.getElementById("answer").innerHTML = ArrayInput;
    vaciar()
  }








  