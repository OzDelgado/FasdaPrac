function PracticaP(altura) {
    for (let a = 1; a <= altura; a++) {
        let Punta = ' '.repeat(altura - a);
        let partes = '1'.repeat(2 * a - 1);
        console.log(Punta + partes);
    }
}
let usuario = 3;
PracticaP(usuario);