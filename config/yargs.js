const argv = require("yargs")
              .option('b',{
                alias:"base",
                type:"number",
                default:5,
                describe:"Esta es la base de la tabla de multiplicar"
              })
              .check((argv,options) => {
                if(isNaN(argv.b)){
                  throw 'El valor especificado tiene que ser un numero';
                }
                return true;
              })
              .option('l',{
                alias:"listar",
                default:false,
                type:"boolean",
                describe:"Muestra la tabla en consola"
              })
              .option('d',{
                alias:"del",
                type:"boolean",
                default:false,
                describe:"Esto es para eliminar el archivo"
              })
              .option('h',{
                alias:"hasta",
                type:"number",
                default:10,
                describe:"Esto es para especificar el limite hasta donde llega la tabla"
              })
              .argv;


module.exports = argv;