//Crear Interfaz-------------------------

function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.tipo = tipo;
    this.anio = anio;
}

//I S**
Seguro.prototype.cotizarSeguro = function(){
    let cantidad;
    const base = 2000;
    switch(this.marca){
        case "1":
            cantidad = base*1.15;
            break;
        case "2":
            cantidad = base*1.05;
            break;
        case "3":
            cantidad = base*1.35;
            break;
            
            
    }
    
//---------------Distincion Basico, Completo ----------------

if(this.tipo === "basico"){
    cantidad *= 1.30;
}
else {
    cantidad *= 1.50;
}    
//---------------------------------------------------    


/* Detectar Año-----------------------*/
    
const diferencia = new Date().getFullYear() - this.anio;

console.log(diferencia);
//-------------------------------------

//Calculo porcentaje por año antiguedad -------------

cantidad -= ((diferencia * 3) * cantidad) / 100;

return cantidad;}

//------------------------------------------------



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
    
//     MENSAJE DE ERROR----------------------------
    Interfaz.prototype.mostrarMensaje = function(mensaje, tipo) {
        const div = document.createElement("div");
        
        if(tipo === "error") {
            div.classList.add("mensaje", "error");
        }
        else {
            div.classList.add("mensaje", "correcto");
        }
        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div, document.querySelector(".form-group"));
// TIME OUT --------------------------------------------
        
        setTimeout (function(){
            document.querySelector(".mensaje").remove();
        }, 3000)
        
//------------     LLAMADO A LA INTERFAZ DE ERROR     -----------------------
    }
    
//------------Mostrar Datos Recuadro  -------------//-----
    Interfaz.prototype.mostrarResultado = function(seguro, total){
        const resultado = document.getElementById("resultado");
        let marca;
        switch(seguro.marca){
            case '1':
                marca = 'Americano';
                break;
            case '2':
                marca= 'Asiatico';
                break;
            case '3':
                marca= 'Europeo';
                break;
        }
        const div = document.createElement("div");
        div.innerHTML = `<p class="header">Tu Resumen: </p>
<p>Marca ${marca}</p>
                         
<p>Año: ${seguro.anio}</p>
                         
<p>Tipo: ${seguro.tipo}</p>
                         
<p>Total: $ ${total}</p>`; 
    const spinner = document.querySelector("#cargando img"); 
        // *cargando img es la class css de la imagen 
    spinner.style.display = "block";
    setTimeout(function(){
        spinner.style.display = "none";
        resultado.appendChild(div);
    },3000)
        
        
        
    }
    
    
    //-----------------------------------------------------//
    
    if (marcaSeleccionada === "" || anioSeleccionado ==="" || tipo === ""){
        interfaz.mostrarMensaje("Faltan datos : Revisar formulario!", "error");
    }
    else { 
    //-------------------- Limpiar Resultados ----------------//
        
    const resultados = document.querySelector("#resultado div");
        
        if(resultados != null){
            resultados.remove();
        }
    //--------------------------------------------------------//
        // Instanciar Seguro
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
        console.log(seguro);
        
        const cantidad = seguro.cotizarSeguro(seguro);
        //mostrar resultado
        
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje ("cotizando...", "exito");
        
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