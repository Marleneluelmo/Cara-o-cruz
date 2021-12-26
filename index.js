function obtener_aleatorio(min,max){
    return Math.floor((Math.random() * (max-min)) +min);
}

function lanzar_moneda(){
    let aleatorio;
    aleatorio= obtener_aleatorio(1,100);

    if(aleatorio%2==0)
    alert("Has sacado cara!");
    else
    alert("Has sacado cruz!");
}