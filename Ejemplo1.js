//Contador usando clausura de js

function contador() {
    let contador = 0;
  
    return function() {
      contador++;
      return contador;
    };
  }
  
  const incrementar = contador();
  console.log(incrementar());  
  console.log(incrementar());
  console.log(incrementar());
  console.log(incrementar());  