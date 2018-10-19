const colors = require('colors');
const {argv} = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;

  case 'listar':
    let listado = porHacer.getListado();
      for (let tarea of listado) {
        console.log('========Tarea========'.green);
        console.log(tarea.descripcion);
        console.log(tarea.completado);
        //console.log('====================='.green);
      }
    break;

  case 'actualizar':
    let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizar);
    break;

  case 'borrar':
  porHacer.borrar(argv.descripcion);
  break;

  default:
    console.log('comando no reconocido')

}
