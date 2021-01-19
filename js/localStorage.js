//al hacer click vaciar carrito , ese plan seleccionado queda en la memoria. :D
//En el caso de comprar otro producto, que abajo traiga el plan seleccionado anteriormente y 
//al hacer click ahi me actualice el carrito con ese plan.

class Jistory{
	selectedPlan = null;
	
	addItem(plan){
	  this.selectedPlan = plan;
	  
	}
	savedPlan(){
		localStorage.setItem('selectedBefore',JSON.stringify(this.selectedPlan));
	}
	loadPlan(htmlPopup, btnChargePlan){
		let savedItem = JSON.parse(localStorage.getItem('selectedBefore'));
		htmlPopup.planJistory.textContent = `Plan visto anteriormente: ${savedItem.nombre}`;
		btnChargePlan.value = savedItem.id;
	}

}
