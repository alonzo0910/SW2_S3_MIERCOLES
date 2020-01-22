//La funciones pueden ser parámetros de otras funciones
var f1 = function () {
};
var f2 = function (f) {
};
f2(f1);
//Se pueden definir funciones dentro de otras funciones
var f3 = function () {
    var f4 = function () {
    };
};
//Dentro de una función interna se puede acceder a variables definidas en un nivel superior
var f4 = function (numero) {
    var n = numero;
    var f5 = function () {
        return n + 1;
    };
    n = n + 2;
    return f5;
};
var f = f4(30);
console.log(f());
///clushure: una funcion tiene comportamientos distintos
