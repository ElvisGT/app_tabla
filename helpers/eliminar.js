const fs = require("fs");

const eliminarArchivo = async( num, del) => {
  try{
    if(del){
      //Eliminar
      fs.unlink(`tabla_${num}.txt`,(err) => {
        if(err) throw err;
      })
      return `tabla_${num}.txt`;
    }
  }catch(err){
    throw err;
  }
  
};

module.exports = {eliminarArchivo};