let a = "Hola mundo";

a = a.padStart(20, "-----"|" ")

let b = []

b.push(a)
b.push(a)
b.pop()

let c = "[Hola que tal como estas, yo muy bien gracias]"
c = c.replace(/[^a-zA-Z ,]/g, "")
console.log(c.split(",")[0]);
console.log(c.split(",")[1]);