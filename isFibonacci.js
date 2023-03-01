/***
 * 
 * Função responsável por reconhecer se o número passado para ela
 * pertence ou não a sequência Fibonacci
 * 
 */

function isFibonacci(num) {
    let helper = 0;

    let numA = 0;
    let numB = 1;

    if (num === 0 || num === 1) {
        console.log("FAZ PARTE DA SEQUÊNCIA!")
    } else {
        do {

            /* Fibonacci */

            helper = numA + numB;

            numA = numB;
            numB = helper;

        } while (num > numB);

        if (numB === num) {
            console.log("FAZ PARTE DA SEQUÊNCIA!")
        } else {
            console.log("NÃO FAZ PARTE DA SEQUÊNCIA!")
        }
    }
}

/***
 * 
 * VALOR DE ENTRADA: 377
 * SAÍDA ESPERADA: FAZ PARTE DA SEQUÊNCIA!
 * 
 */

isFibonacci(377)

/***
 * 
 * VALOR DE ENTRADA: 120
 * SAÍDA ESPERADA: NÃO FAZ PARTE DA SEQUÊNCIA!
 * 
 */

isFibonacci(120)