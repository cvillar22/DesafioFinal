//variables
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

let discountCodes = [
    {
        nombre: 'BEONNET',
        valor: 0.10,
    },
    {
        nombre: 'CVILLAR',
        valor: 0.20,
    }
];
let btnLoCompra = document.getElementById('boton-comprar');
let closeCart = document.getElementById('closeCart');
let btnChargePlan = document.getElementById('chargePlan');
let descuento = document.getElementById('Descuento');
let btnBuy = document.querySelectorAll('.btnBuy');
let btnVaciar = document.querySelector('.btnVaciar');
let carrito = new Carrito();// es la creación de un solo carrito
let promo = listaPlanes(baseDeDatos);//lamar una funcion
let imgCarrito = document.getElementById('imgCarrito');
addElements(btnBuy);
let htmlPopup = {
    popup: document.querySelector('.popup'),
    precioFinal: document.getElementById('precioFinal'),
    planFinal: document.getElementById('planFinal'),
    planJistory: document.getElementById('sawPlan'),
}; //objeto literal
let jistory = new Jistory();

function listaPlanes(baseDeDatos){
    let planes = [];
    baseDeDatos.forEach(dato => planes.push(new Plan(dato.id, dato.nombre, dato.precio)));
    return planes;
}
//Evento 
function addElements(btnBuy){
    for(let boton of btnBuy){
        boton.addEventListener("click", fullCart);
        boton.addEventListener('click',unHidePopUp);
    }
    
}
function fullCart(evento){
        let selectedPlan = promo.find(plan => plan.id == evento.target.value);
        carrito.addItem(selectedPlan);
        carrito.upLoadPlan(htmlPopup);
}
//Eventos
imgCarrito.addEventListener('click',unHidePopUp);
btnVaciar.addEventListener('click', removeCart);
descuento.addEventListener('click',applyDiscount);
btnChargePlan.addEventListener('click', fullCart);
closeCart.addEventListener('click', removeCart);
btnLoCompra.addEventListener('click', msjBuy);


function unHidePopUp(){
    if (carrito.status()) { 
        console.log('hayPlan');
        jistory.loadPlan(htmlPopup, btnChargePlan);
        htmlPopup.popup.classList.replace('hide','unHide');}
         else {
            console.log('noHayPlan');
            htmlPopup.popup.classList.replace('unHide','hide');
        };
}
function removeCart(){
    jistory.addItem(carrito.selectedPlan);
    jistory.savedPlan();
    carrito.removeItem();
    unHidePopUp();
}
function applyDiscount(evento){
    evento.target.style.display = "none";
    carrito.discount(discountCodes);
    carrito.upLoadPlan(htmlPopup);
}
function cerrarCart(evento){
    jistory.addItem(carrito.selectedPlan);
    jistory.savedPlan();
    carrito.removeItem();
    unHidePopUp();
}
function msjBuy(evento){
    alert('GRACIAS POR TU COMPRA');
    carrito.removeItem();
    unHidePopUp();
}












