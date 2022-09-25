const fs = require("fs");
const colors = require("colors");


const crearArchivo = ( num , listar , hasta) => {
  return new Promise((resolve,reject) => {
    if(num){
      let salida= '';
      let consola = '';
      
      for(let i = 1;i <= hasta;i++){
        consola += `${colors.blue(num)} ${'x'.red} ${i} ${'='.red} ${num * i} \n`;
        salida += `${num} x ${i} = ${num * i} \n`;
      }
      
      //Imprime la tabla
      if(listar){
          console.log("====================".blue);
          console.log(colors.rainbow("   Tabla del: "),num);
          console.log("====================".blue);
          console.log(consola);
      }
       
        //Crear
        fs.writeFile(`tablas/tabla_${num}.txt`,salida,(err) => {
            if(err) throw err;

            resolve(colors.rainbow(`tabla_${num}.txt`));
        })

    }else {
        reject('El numero introducido no es correcto')
    }

  })
};
    

module.exports = {crearArchivo};