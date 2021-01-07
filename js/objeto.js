/* PROYECTO: Beonnet, es un sitio web en donde se ofrecen SERVICIOS DIGITALES para poder 
tener tu página web y de esta manera mostrar todo lo que quieras compartir con el mundo cibernético.
En la página de Servicios, se muestran los distintos planes que ofrece el equipo de Beonnet para armar 
un sitio web.

ALCANCE:Establecer como objeto de mi proyecto los planes, y así implementar el carrito de compras,
 y poder realizar operaciones comerciales exitosas.
*/

// VARIABLES

let baseDeDatos = [
    {
        id: 1,
        nombre: 'Landing',
        precio: 20500,
    },
    {
        id: 2,
        nombre: 'Standard',
        precio: 25500,
       
    },
    {
        id: 3,
        nombre: 'Tienda',
        precio: 33500,
    },
    {
        id: 4,
        nombre: 'Corporativa',
        precio: 40500,
    }

];

//OBJETO

class Plan {
  // nombre = '';
  // precio = '';
  constructor(id,nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
  
  precio(){
    return this.precio;
  }
}

class Carrito{
constructor(){
  this.items = [];
}
calculateTotal(){
  return "total";
}
addItem(item){
  return  "add Item";
}
}
let carrito = new Carrito();
let plan = new Plan(1, 'Landing', 20500);


