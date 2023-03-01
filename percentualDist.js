/***
 * 
 * Função responsável por calcular o percentual de representação de cada estado
 * no lucro mensal de uma distribuidora
 * 
 */


/* cria-se um dicionário com as chaves que são as siglas dos estados e o valores que são o quanto foi arrecadado pelo estado naquele mês */
let distribuidora = new Map();

distribuidora.set("SP", 67836.43)
distribuidora.set("RJ", 36678.66)
distribuidora.set("MG", 29229.88)
distribuidora.set("ES", 27165.48)
distribuidora.set("Outros", 19849.53)

function percDist (obj) {
    let total = 0

    /* calcula o total ou 100% dos lucros da distribuidora no mês */
    for (let [key, value] of distribuidora) {
        total += value;
    }

    /* calcula e retorna no console o percentual de participação de cada estado nos lucros mensais da distribuidora */
    for (let [key, value] of distribuidora) {
        let perc = value * 100 / total

        console.log(key + ' = ' + perc.toFixed(2) + '%')
    }
}

percDist(distribuidora)