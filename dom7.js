function gatito(){
    var nuevoElemento = document.createElement("div")
    var texto = document.createTextNode("Gatito");
    nuevoElemento.className += "texto";
    nuevoElemento.appendChild(texto)
    var agarrarDiv = document.getElementById("div1");
    agarrarDiv.appendChild(nuevoElemento);
}

function perrito() {
    var nuevoElemento = document.createElement("div")
    var texto = document.createTextNode("Perrito");
    nuevoElemento.className += "texto";
    nuevoElemento.appendChild(texto)
    var agarrarDiv = document.getElementById("div2");
    agarrarDiv.appendChild(nuevoElemento);
}

function unaSola(){
    perrito()
    gatito()
}

function conejo() {
    var nuevoElemento = document.createElement("div")
    var texto = document.createTextNode("conejo");
    nuevoElemento.className += "texto";
    nuevoElemento.appendChild(texto)
    var agarrarDiv = document.getElementById("div3");
    agarrarDiv.appendChild(nuevoElemento);
}