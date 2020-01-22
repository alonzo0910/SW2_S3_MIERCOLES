var Persona = /** @class */ (function () {
    //con private solo se puede manejar desde dentro, desde afuera no se podría modificar (para que otra persona no modifique mis clases)
    function Persona() {
    }
    Persona.getInstance = function () {
        if (Persona.instance == null) {
            Persona.instance = new Persona();
        }
        //return this.instance <-- sale error porq no se hace como instancia
        return Persona.instance; //para acceder
    };
    //propiedad de clase, debe ser unica dado a que va a referenciar a la unica instancia...con static se vuelve propiedad de clase
    Persona.instance = null; //se crea una variable para sigleton, debe ser de tipo de la misma clase
    return Persona;
}());
var mainSingleton = function () {
    /*let p1 : Persona = new Persona()
    let p2 : Persona = new Persona()
    p1.nombre = "Pepito"
    p2.nombre = "Pepito"     */
    //se llama defrente desde la clase, no como objeto 
    //Persona.getInstance()
    var p3 = Persona.getInstance();
    var p4 = Persona.getInstance();
    p3.nombre = "Luisito";
    p4.nombre = "Claudita";
    console.log("Nombre: " + p3.nombre); //en este caso va a imprimir claudita,
    // debido a que cuando se crea p4, se guarda en el mismo espacio de memoria que p3 y lo sobreescribe
};
mainSingleton();
