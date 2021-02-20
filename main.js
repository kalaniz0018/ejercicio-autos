
class Autos {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    
    datos() {
        return (`Marca:${this.marca} // Modelo:${this.modelo} //  Precio:$${this.precio},00 `);
    }
    imprimir() {
        console.log(this.datos());
    }
    
}

class autosConPuertas extends Autos {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio)
        this.puertas = puertas;
    }

    datos() {
        return super.datos() + `// Puertas:${this.puertas}`;
    }
}


class autosCilindrados extends Autos {
    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio)
        this.cilindrada = cilindrada;
    }

    datos() {
        return super.datos() + `// Cilindrada:${this.cilindrada}`;
    }
}


function autoMasCaro(arregloDA) {
    for (let i = 0; i < arregloDA.length; i++) {
        arregloDeAutos[i].precio

    }
}

function autosDeUnaMarca(marca, autos) {
    var resultado = [];
    autos.forEach((elementoAuto) => {
        if (marca === elementoAuto.marca) {
            resultado.push(elementoAuto);
        }
    })
    return resultado;
}


function autosDeMayorPrecio(precio, autos) {
    var resultado = [];
    autos.forEach((auto) => {
        if (precio < auto.precio) {
            resultado.push(auto);
        }
    })
    return resultado;
}


function modeloConLetra(arregloDA, letra) {
    var autosElegido = [];
    arregloDA.forEach((auto) => {
        if (letra === auto.marca[0]) {
            autosElegido.push(auto)
        }
    })
    return autosElegido;
}

function ordenarPorPrecio(arregloDA, tipoDeOrden) {
    if (tipoDeOrden === "mayor") {
        arregloDA.sort((a, b) => b.precio - a.precio);

    } else if (tipoDeOrden === "menor") {
        arregloDA.sort((a, b) => a.precio - b.precio);

    }
}

function numberWithDots(num) {
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');
        return num;

    } else {
        console.log('Solo se permiten numeros');
    }
}



var arregloDeAutos = [];
arregloDeAutos.push(new autosConPuertas("Peugeot", "206", numberWithDots(200000), 4));
arregloDeAutos.push(new autosConPuertas("Peugeot", "208", numberWithDots(250000), 5));
arregloDeAutos.push(new autosCilindrados("Honda", "Titan", numberWithDots(60000), "125cc"));
arregloDeAutos.push(new autosCilindrados("Yamaha", "YBR", numberWithDots(80500), "160CC"));

ordenarPorPrecio(arregloDeAutos, "mayor")

var autoMasCaro = arregloDeAutos[0]

ordenarPorPrecio(arregloDeAutos, "menor")
var autoMasBarato = arregloDeAutos[0]

arregloDeAutos.forEach((auto) => {
    auto.imprimir();
});

autosDeUnaMarca("Yamaha", arregloDeAutos)

var ModeloLetraY = modeloConLetra(arregloDeAutos, "Y")[0]

console.log("=============================");
console.log(`Vehículo más caro:` + " " + autoMasCaro.marca + " " + autoMasCaro.modelo);
console.log(`Vehículo más barato:` + " " + autoMasBarato.marca + " " + autoMasBarato.modelo);
console.log(`Vehículo que contiene en el modelo la letra 'Y':` + " " + ModeloLetraY.marca + " " + ModeloLetraY.modelo + " " + ModeloLetraY.precio);
console.log("=============================");
console.log("Vehículos ordenados por precio de mayor a menor:");
ordenarPorPrecio(arregloDeAutos, "mayor");
arregloDeAutos.forEach((auto) => {
    console.log(auto.marca + " " + auto.modelo)
})
