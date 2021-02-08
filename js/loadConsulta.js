function loadConsulta(){
        let savedItem = JSON.parse(localStorage.getItem('selectedBefore'));
        if(savedItem){
        	setOption(savedItem);
       }
    };

function setOption(savedItem){
	let option  = $(`option[value = "${savedItem.id}"]`);
	option.prop("selected",true);
}

loadConsulta();