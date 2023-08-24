function generadorMultiplicador(factor) {
    return function(numero) {
      return numero * factor;
    };
  }
  
  const duplicar = generadorMultiplicador(2);
  const triplicar = generadorMultiplicador(3);
  
  console.log(duplicar(35)); 
  console.log(triplicar(5)); 
  