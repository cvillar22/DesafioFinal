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
let carImg = $(".carrito");
let btnLoCompra = $("#boton-comprar");
let closeCart = $("#closeCart");
let btnChargePlan = $("#chargePlan");
let descuento = $("#Descuento");
let btnBuy = $(".btnBuy");
let btnVaciar = $(".btnVaciar");
let carrito = new Carrito();// es la creación de un solo carrito
let promo;
let imgCarrito = $("#imgCarrito");
let htmlPopup = {
    popup: $(".popup"),
    precioFinal: $("#precioFinal"),
    planFinal: $("#planFinal"),
    planJistory: $("#sawPlan"),
}; //objeto literal
let jistory = new Jistory();
let input = $(".inputDesc");

$.ajax({
    url: "../js/data.json",
    type: "GET",
    dataType: "json",
success: json => promo = listaPlanes(json),
error: xhr => console.log("Hubo un problema al cargar los planes, error: " + xhr.statusText),
});

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
        htmlPopup.popup.fadeIn(500);
        carImg.addClass("animate__animated animate__heartBeat animate__infinite");
                }
         else {
            console.log('noHayPlan');
            htmlPopup.popup.fadeOut(500);
        };
}
function removeCart(){
    jistory.addItem(carrito.selectedPlan);
    jistory.savedPlan();
    carrito.removeItem();
    disabledInput(false);
    unHidePopUp();
    input.removeClass("animate__animated animate__zoomIn");

}
function showDiscount(){
    input.toggleClass("visible");
}

function msjBuy(){
    alert('GRACIAS POR TU COMPRA');
    carrito.removeItem();
    disabledInput(false);
    unHidePopUp();
    input.removeClass("animate__animated animate__zoomIn");
}
function pressEnter(evento){
    let target = $(evento.target);
    if ( evento.which == 13 ) {
    carrito.discount(discountCodes,target.val().toUpperCase());
    carrito.upLoadPlan(htmlPopup);
    if (carrito.hasPlanDisc){disabledInput(true);
        target.addClass("animate__animated animate__zoomIn");
    }
  }
}

function disabledInput(val){
    input.prop("disabled",val);

}















