let formatearJSON = (nombre : string, edad : number) => {
    return `{nombre: '${nombre}', edad: ${edad}}`
}
//se queiere convertir a mayusculas

let funcionDecoradora = (funcionADecorar : Function) =>{
    let funcionDecorada = (nombre : string, edad : number)=> {
    let res = funcionADecorar(nombre, edad)
        return res.toUpperCase()
    }
    return funcionDecorada
}

let mainDecorator =() => {
    let funcionDecorada = funcionDecoradora(formatearJSON)
    let json = funcionDecorada("Pepito", 30)
    console.log(json)

    //console.log(funcionDecoradora(formatearJSON)("Pepito",30))
}
mainDecorator()