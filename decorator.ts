
//La funciones pueden ser parámetros de otras funciones
let f1 = () => {
   
}

let f2 = (f : Function) => {   //recibe como parametros una funcion
}
f2(f1)


//Se pueden definir funciones dentro de otras funciones
let f3 = () => {
    let f4 = () => {

    }
}

//Dentro de una función interna se puede acceder a variables definidas en un nivel superior
let f4 = (numero : number) => {
    let n : number = numero
    let f5 = () => {
        return n+1
    }
    n=n+2
    return f5
}

let f = f4(30)
console.log(f())

///closure: una funcion tiene comportamientos distintos


   


