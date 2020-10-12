var arr_alimento = {'premium' : [
                            {nombre : 'Royal Canin', precio : '1000'} ,
                            {nombre : 'Hills', precio : '1300'}
                    ],
                    'humedo': [
                    	{nombre : 'Royal Canin', precio : '60'} ,
                    	{nombre : 'Hills', precio : '65'}
                    	]};


var arr_accesorios = {'arena' : [
                            {nombre : 'Cats best', precio : '400'} ,
                            {nombre : 'Gatito', precio : '100'}
                    ]};

var arr_muebles = {'arbol' : [
                            {nombre : 'Gatito durmiente', precio : '2000'} ,
                            {nombre : 'Bosque', precio : '2300'}
                    ]};

arr_alimento.premium.forEach(function(e){
    var node = document.createElement("LI");
    node.setAttribute("class", "list-group-item");
    var textnode = document.createTextNode(e.nombre + '  $' + e.precio);
    node.appendChild(textnode);
    document.getElementById("productos").appendChild(node);
})

arr_alimento.humedo.forEach(function(e){
    var node = document.createElement("LI");
    node.setAttribute("class", "list-group-item");
    var textnode = document.createTextNode(e.nombre + '  $' + e.precio);
    node.appendChild(textnode);
    document.getElementById("productos-h").appendChild(node);
})

arr_accesorios.arena.forEach(function(e){
    var node = document.createElement("LI");
    node.setAttribute("class", "list-group-item");
    var textnode = document.createTextNode(e.nombre + '  $' + e.precio);
    node.appendChild(textnode);
    document.getElementById("productos-acc").appendChild(node);
})

arr_muebles.arbol.forEach(function(e){
    var node = document.createElement("LI");
    node.setAttribute("class", "list-group-item");
    var textnode = document.createTextNode(e.nombre + '  $' + e.precio);
    node.appendChild(textnode);
    document.getElementById("productos-m").appendChild(node);
})



function activarAcc() {
	var id1 = document.getElementById("a1");
	var id2 = document.getElementById("a2");
	var id3 = document.getElementById("a3");

	var eid1 = document.getElementById("alimento");
	var eid2 = document.getElementById("accesorios");
	var eid3 = document.getElementById("muebles");

	if (id1.className == "nav-item nav-link active"){
		id1.className = "nav-link";
		eid1.className = "tab-pane fade";
		id2.className = "nav-item nav-link active";
		eid2.className = "tab-pane fade show active";
	} else if(id3.className == "nav-item nav-link active"){
		id3.className = "nav-link";
		eid3.className = "tab-pane fade";
		id2.className = "nav-item nav-link active";
		eid2.className = "tab-pane fade show active";
	}
}

function activarAl() {
	var id1 = document.getElementById("a1");
	var id2 = document.getElementById("a2");
	var id3 = document.getElementById("a3");

	var eid1 = document.getElementById("alimento");
	var eid2 = document.getElementById("accesorios");
	var eid3 = document.getElementById("muebles");

	if (id2.className == "nav-item nav-link active"){
		id2.className = "nav-link";
		eid2.className = "tab-pane fade";
		id1.className = "nav-item nav-link active";
		eid1.className = "tab-pane fade show active";
	} else if(id3.className == "nav-item nav-link active"){
		id3.className = "nav-link";
		eid3.className = "tab-pane fade";
		id1.className = "nav-item nav-link active";
		eid1.className = "tab-pane fade show active";
	}
}

function activarMuebles() {
	var id1 = document.getElementById("a1");
	var id2 = document.getElementById("a2");
	var id3 = document.getElementById("a3");

	var eid1 = document.getElementById("alimento");
	var eid2 = document.getElementById("accesorios");
	var eid3 = document.getElementById("muebles");

	if (id1.className == "nav-item nav-link active"){
		id1.className = "nav-link";
		eid1.className = "tab-pane fade";
		id3.className = "nav-item nav-link active";
		eid3.className = "tab-pane fade show active";
	} else if(id2.className == "nav-item nav-link active"){
		id2.className = "nav-link";
		eid2.className = "tab-pane fade";
		id3.className = "nav-item nav-link active";
		eid3.className = "tab-pane fade show active";
	}
}

function carrito(){
	var elemento = document.getElementById("compras");

	elemento.className = "tab-pane fade show active"
}


function sonVacios(){
	var producto = document.getElementById('inputProd').value;
	var precio = document.getElementById('inputPrecio').value;
	var cantidad = document.getElementById('inputCantidad').value;
	if(producto == "" || precio  == "" || cantidad  == ""){
		alert("Tienes campos vacios");
	}else{
		agregaProducto();
	}	
}


function agregaProducto(){
	var producto = document.getElementById('inputProd').value;
	var precio = document.getElementById('inputPrecio').value;
	var cantidad = document.getElementById('inputCantidad').value;
	var subtotal = cantidad * precio;
	var valores = [producto, precio, cantidad, subtotal];
	var nodeTR = document.createElement("TR");

	for (var i = 0; i < 4; i++) {
		var nodeTD = document.createElement("TD");
		var textnode = document.createTextNode(valores[i]);
		nodeTD.appendChild(textnode);
		if(i == 3){nodeTD.setAttribute("class", "item-sum");};
		nodeTR.appendChild(nodeTD);
	}

	document.getElementById('lpedido').appendChild(nodeTR);
	
	var arrSubtotal = document.getElementsByClassName('item-sum');
	var total = 0;
	for(var j = 0; j < arrSubtotal.length; j++){ 
		total += Number(arrSubtotal[j].innerHTML);
	}
	document.getElementById('liTotal').style.display = 'block';
	document.getElementById('total').innerHTML = total;
	document.getElementById('inputProd').value = '';
	document.getElementById('inputPrecio').value = '';
	document.getElementById('inputCantidad').value = '';
}
