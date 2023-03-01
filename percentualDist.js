/***
 * 
 * Função responsável calcular o percentual de representação de cada estado
 * no lucro mensal de uma distribuidora
 * 
 */

var distribuidora = new Map();

distribuidora.set("SP", 67836.43)
distribuidora.set("RJ", 36678.66)
distribuidora.set("MG", 29229.88)
distribuidora.set("ES", 27165.48)
distribuidora.set("Outros", 19849.53)

function percDist (obj) {
    var total = 0

    for (var [key, value] of distribuidora) {
        total += value;
    }

    for (var [key, value] of distribuidora) {
        var perc = value * 100 / total

        console.log(key + ' = ' + perc.toFixed(2) + '%')
    }
}

percDist(distribuidora)