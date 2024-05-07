const esPangrama = cadena => {
	const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxy";
	cadena = cadena.toLowerCase();
	cadena = Array.from(ALFABETO_MINUSCULAS).every(letra => cadena.includes(letra));
    if (cadena === true){
        console.log("Es pangrama");
    } else if (cadena === false) {
        console.log("No es pangrama");
    }
}
esPangrama("z")
