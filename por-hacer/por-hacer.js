const fs = require('fs');
const colors = require('colors');
let listadoPorHacer = [];

const guardarDB = () => {
  let datos = JSON.stringify(listadoPorHacer);
  const data = new Uint8Array(Buffer.from(datos));
  fs.writeFile(`db/data.json`, data, (err) => {
    if (err) throw new Error('No se pudo guardar', err)
  });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (e) {
      listadoPorHacer = [];
    }

}

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
}


const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false
  }
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
}

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion == descripcion);
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
}

const borrar = (descripcion) => {
  cargarDB();
  try {
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion == descripcion);
    if (index >= 0) {
      listadoPorHacer.splice(index,1);
      console.log('Tarea borrada con éxito'.green);
      guardarDB();
    }else {
      console.log('Tarea no encontrada'.red);
    }
  } catch (e) {
    console.log('Error'.yellow, e);
  }
}


module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}
