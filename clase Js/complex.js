const x = 8
let y = 0
function suma(base, adicion) {
    max = 20
    if(base + adicion < max) {
        console.log(base + adicion);
        suma(base + adicion, adicion);
    } else {
        console.log(base + adicion);
    }
}

suma(y, x);

