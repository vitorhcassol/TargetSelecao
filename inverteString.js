/***
 * 
 * Função responsável por inverte um string
 * 
 */

function inverteString(string) {
    let response = '';

    for(let i = string.length-1; i > -1; i--) {
        response += string[i]
    };

    console.log(response)
}


/***
 * 
 * VALOR DE ENTRADA: banana
 * SAÍDA ESPERADA: ananab
 * 
 */

inverteString('banana')

/***
 * 
 * VALOR DE ENTRADA: inconstitucionalissimamente
 * SAÍDA ESPERADA: etnemamissilanoicutitsnocni
 * 
 */

inverteString('inconstitucionalissimamente')

