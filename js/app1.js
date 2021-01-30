//Crear Interfaz-------------------------

function seguro(marca, anio, tipo){
    this.marca = marca;
    this.tipo = tipo;
    this.anio = anio;
}

function Interfaz(){}
//-------------------------------------------------------


// EventListener----------------------------

const formulario = document.getElementById("cotizar-seguro");


formulario.addEventListener("submit", function(e){
    e.preventDefault();
    
    const marca = document.getElementById("marca");
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    
    const anio = document.getElementById("anio");
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
    
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
//-------------------------------------------------------
    
// Crear Instancia Errores----------------------
    
    const interfaz = new Interfaz();
    
    if (marcaSeleccionada === "" || anioSeleccionado ==="" || tipo === ""){
        console.log("Faltan Datos");
    }
    else {
        console.log("TODO OK");
    }
    
})
//-------------------------------------------------------


//Generar Años Select//-------------
const max = new Date().getFullYear(),
      min = max - 20;

const selectAnios = document.getElementById("anio");
for( let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}
//-------------------------------------------------------