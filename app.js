const {crearArchivo} = require("./helpers/multiplicar");
const {eliminarArchivo} = require("./helpers/eliminar");
const argv = require("./config/yargs");

console.clear();

crearArchivo( argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo, "creado"))
  .catch(err => console.error(err))

//Esto es para eliminar el archivo
eliminarArchivo( argv.b, argv.del )
  .then(nombreArchivo => console.log(nombreArchivo,"eliminado"))
  .catch(err => console.log(err))


