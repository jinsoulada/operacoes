// função que classifica a temperatura

function classificarTempertura(temp) {
    if (temp <= 0) {
        return "temperatura negativa(congelante)"
    } else if (temp >=1 && temp < 12)  {
        return "temperatura baixa (frio)" ;
    } else if (temp >= 13 && temp < 20) {
        return "temperatura agradável (OK)"
    } else if (temp >=21 && temp < 30) {
        return "temperatura alta (calor)"
    } else {
        return "temperatura muito alta (escaldante) "
    }

}

console.log(classificarTempertura(45))
console.log(classificarTempertura(0))
console.log(classificarTempertura(25))
console.log(classificarTempertura(-12))
console.log(classificarTempertura(10))
console.log(classificarTempertura(16))