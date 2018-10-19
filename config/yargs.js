const descripcion =  {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea por hacer'
}

const completado =  {
  alias: 'c',
  default: true,
  desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
              .command('crear','Crea una tarea por hacer', {
                descripcion
              })
              .command('actualizar','Actualizar estado completado de una tarea',{
                descripcion,
                completado
              })
              .command('listar','Crea una lista de tareas por hacer')
              .command('borrar', 'Elimina una tarea por hacer',{
                descripcion
              })
              .help()
              .argv;


module.exports = {
  argv
}
