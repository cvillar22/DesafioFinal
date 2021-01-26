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
let btnLoCompra = $("#boton-comprar");
let closeCart = $("#closeCart");
let btnChargePlan = $("#chargePlan");
let descuento = $("#Descuento");
let btnBuy = $(".btnBuy");
let btnVaciar = $(".btnVaciar");
let carrito = new Carrito();// es la creación de un solo carrito
let promo = listaPlanes(baseDeDatos);//lamar una funcion
let imgCarrito = $("#imgCarrito");
let htmlPopup = {
    popup: $(".popup"),
    precioFinal: $("#precioFinal"),
    planFinal: $("#planFinal"),
    planJistory: $("#sawPlan"),
}; //objeto literal
let jistory = new Jistory();
let input = $(".inputDesc");

function listaPlanes(baseDeDatos){
    let planes = [];
    baseDeDatos.forEach(dato => planes.push(new Plan(dato.id, dato.nombre, dato.precio)));
    return planes;
}

function fullCart(evento){
        let target = $(evento.target);
        let selectedPlan = promo.find(plan => plan.id == target.val());
        carrito.addItem(selectedPlan);
        carrito.upLoadPlan(htmlPopup);
        unHidePopUp();
}
//Eventos
btnBuy.click(fullCart);
imgCarrito.click(unHidePopUp);
btnVaciar.click(removeCart);
descuento.click(showDiscount);
btnChargePlan.click(fullCart);
closeCart.click(removeCart);
btnLoCompra.click(msjBuy);
input.keypress(pressEnter);


function unHidePopUp(){
    if (carrito.status()) { 
        console.log('hayPlan');
        jistory.loadPlan(htmlPopup, btnChargePlan);
        htmlPopup.popup.removeClass("hide").addClass("unHide");}
         else {
            console.log('noHayPlan');
            htmlPopup.popup.removeClass("unHide").addClass("hide");
        };
}
function removeCart(){
    jistory.addItem(carrito.selectedPlan);
    jistory.savedPlan();
    carrito.removeItem();
    disabledInput(false);
    unHidePopUp();

}
function showDiscount(){
    input.toggleClass("visible");
}

function msjBuy(){
    alert('GRACIAS POR TU COMPRA');
    carrito.removeItem();
    disabledInput(false);
    unHidePopUp();
}
function pressEnter(evento){
    let target = $(evento.target);
    if ( evento.which == 13 ) {
    carrito.discount(discountCodes,target.val().toUpperCase());
    carrito.upLoadPlan(htmlPopup);
    target.prop("disabled",carrito.hasPlanDisc);
    if (carrito.hasPlanDisc){disabledInput(true);
    }
  }
}

function disabledInput(val){
    input.prop("disabled",val);

}













