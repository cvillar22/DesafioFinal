/* PROYECTO: Beonnet, es un sitio web en donde se ofrecen SERVICIOS DIGITALES para poder 
tener tu página web y de esta manera mostrar todo lo que quieras compartir con el mundo cibernético.
En la página de Servicios, se muestran los distintos planes que ofrece el equipo de Beonnet para armar 
un sitio web.

ALCANCE:Establecer como objeto de mi proyecto los planes, y así implementar el carrito de compras,
 y poder realizar operaciones comerciales exitosas.
*/
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





