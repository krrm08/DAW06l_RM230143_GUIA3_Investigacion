function crearTarea(nombre) {
    let completadas = 0;
  
    return {
      getNombre: function() {
        return nombre;
      },
      completar: function() {
        completadas++;
        console.log(`Tarea "${nombre}" completada. Total: ${completadas}`);
      }
    };
  }
  
  const tarea1 = crearTarea("Hacer compras");
  const tarea2 = crearTarea("Estudiar JavaScript");
  
  tarea1.completar(); 
  tarea1.completar(); 
  
  tarea2.completar(); 
  
  