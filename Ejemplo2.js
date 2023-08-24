//Generador saludo personalizado

function generarSaludo(nombre) {
    return function() {
      console.log(`¡Hola, ${nombre}!`);
    };
  }
  
  const saludarJuan = generarSaludo("Juan");
  const saludarMaria = generarSaludo("Maria");
  const saludarMarcos = generarSaludo("Marcos");
  
  saludarJuan();  
  saludarMaria();
  saludarMarcos(); 