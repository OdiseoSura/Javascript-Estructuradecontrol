let array = [20, 35, 18, 7, 9, 60]
let suma_total = 0
let media

for (let i = 0; i < array.length; i++){
    suma_total += array[i]
    media = suma_total / array.length
}

alert("La media total es: " + Math.round(media));
