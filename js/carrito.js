//objeto
class Carrito{
    selectedPlan = null;
    hasPlanDisc = false;
	calculateTotal(){
	  return "total";
	}
	addItem(plan){
	  this.selectedPlan = plan;
	  
	}

	upLoadPlan(htmlPopup){
	  htmlPopup.planFinal.text(`Plan: ${this.selectedPlan.nombre}`);
	  htmlPopup.precioFinal.text(`  Total:  $   ${this.selectedPlan.precio} `);
	}
	status(){
		return	this.selectedPlan != null;
	}
	removeItem(){
		this.selectedPlan = null;
		this.hasPlanDisc = false;
	}
	discount(discountCodes,discount){
		if (this.status()) {
			let code = discountCodes.find(code => code.nombre == discount);
			if (code){
				this.selectedPlan.precio = this.selectedPlan.precio - (this.selectedPlan.precio * code.valor);//calcular el precio con el descuento
				this.hasPlanDisc = true;
			};
		};
	}
	
}


