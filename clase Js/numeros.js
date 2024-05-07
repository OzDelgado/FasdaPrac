function numeros() {
    for (let numero = 0; numero <= 100; numero++) {
        if (numero % 3 === 0 && numero % 5 === 0) {
            console.log("Caera la republica" + ' ' + numero);
        } else if (numero % 3 === 0) {
            console.log("fizz" + ' ' + numero);
        } else if (numero % 5 === 0) {
            console.log("fuzz" + ' ' + numero);
        }
    }
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

numeros();