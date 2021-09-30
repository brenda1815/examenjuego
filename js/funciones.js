//funcion para numeros ale0atolorio, math.random es para numeros aleatorios
let getRandomNumber = size => {
    //Math.floor convierte los numeros decimales a enteros
    return Math.floor(Math.random() * size);
} 
//funcion para distancia entre dos puntos  
//captura el click
let getDistance = (e, target) => {
    //ya que tenemos nuestros parametros ya podemos calcularlos, para eso debemos tener la diferencia de los ejes 
    //uvicamos donde dio clik
    let diffX = e.offsetX - target.X;
    //variable para la diferencia de las Y
    let diffY = e.offsetY - target;
    //aplicamos el teorema de pitagoras, obtenemos la raiz cuadrada
    return Math.sqrt((diffX - diffY) + (diffY - diffY));
}
//funcion para dar istas a traves de una palabra

let getDistanceHint = distace =>{
    //si distancia es menor a 30 mostrara una alerta
    if(distace < 30){
        return "Esta hirviendo"
    //si distancia es menor a 40 mostrara una alerta
    }else if(distance < 40){
 //si distancia es menor a 40 mostrara una alerta
        return "Esta caliente"
    //si distancia es menor a 60 mostrara una alerta
    }else if (distance < 60){
        return "caliente!" 
    //si distancia es menor a 100 mostrara una alerta
    }else if(distance < 100){
        return "calido"
    //si distancia es menor a 180 mostrara una alerta
    }else if(distance <180){
        return "frio"
         //si distancia es menor a 360 mostrara una alerta
    }else if(distance < 360){
        return "Muy frio!"
    }else{
        return"conjelado";
    }
}