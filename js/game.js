//archivo para general la logica del mapa
//creamos una constante para el ancho
const WHIDTH=400;
//creamos una constante para lo alto 
const HEIGH=400;
//utilizamos las funciones 
let target ={
    x: getRandomNumber(WHIDTH),
    y: getRandomNumber(HEIGH)
};
// a traves del id traeremos la imagen
//$map hace referencia al documento html
//guardamos en una variable la referencia al mapa
let $map = document.getElementById('map');

//obtenemos por consola las pistas
let  $distance = document.getElementById('distance');

//obtenemos tambien cuando el usuario da click
$map.addEventListener('clicks', function(e){
   
   //cada que de un clickk se aumentara 
   clicks++;
    //obtenemos la otra distancia, obtenemos dos parametros
    // el primer parametro es el evento del click, el segundo es donde esta la imagen del tesoro
    let distance = getDistance(e, target);
    //utilizamos la funcion getDistancehind para pasarle la distancia de la otra funcion
    
    let getDistanceHint = (distance);
    //la etiqueta distance en el html le colocamos un string
    $distance.innerHTML = `<h1>${getDistanceHint}</h1>`
   //condicion si la distancia es menor a 20 mostrara una alerta  
    if (distance <20) {
            alert(`Encontraste el tesoro en ${clicks}`);
            //para refrescar la pagina con javascript
            location.reload
        }

})