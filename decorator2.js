var formatearJSON = function (nombre, edad) {
    return "{nombre: '" + nombre + "', edad: " + edad + "}";
};
//se queiere convertir a mayusculas
var funcionDecoradora = function (funcionADecorar) {
    var funcionDecorada = function (nombre, edad) {
        var res = funcionADecorar(nombre, edad);
        return res.toUpperCase();
    };
    return funcionDecorada;
};
var mainDecorator = function () {
    var funcionDecorada = funcionDecoradora(formatearJSON);
    var json = funcionDecorada("Pepito", 30);
    console.log(json);
};
mainDecorator();
