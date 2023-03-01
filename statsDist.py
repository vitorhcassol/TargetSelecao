# Função é retornar algumas estatísticas de faturamento de uma distribuidora


# Importando os dados do arquivo json para uma variavel chamada dados

import json

with open('dados.json', encoding='utf-8') as dado_mensal_dist:
    dados = json.load(dado_mensal_dist)

# Retornando o MENOR valor de faturamento ocorrido de um dia do mês;

def menorValor(dados):
    dia = 0
    menorValor = 99999999999999

    for i in dados:
        
        if i['valor'] < menorValor and i['valor'] != 0.0:
            dia = i['dia']
            menorValor = i['valor']

    print(f'O menor valor faturado no mês foi de: R$ {menorValor:.2f} no dia {dia}.')

menorValor(dados)

# Retornando o MAIOR valor de faturamento ocorrido de um dia do mês;

def maiorValor(dados):
    dia = 0
    maiorValor = 0

    for i in dados:
        
        if i['valor'] > maiorValor:
            dia = i['dia']
            maiorValor = i['valor']

    print(f'O maior valor faturado no mês foi de: R$ {maiorValor:.2f} no dia {dia}.')

maiorValor(dados)

# Número de dias no mês em que o valor de faturamento diário foi superior à média mensal

def diasAcimaDaMedia(dados):
    helper = {'dias': 0, 'total': 0}
    dias = 0

    #Calculando a media mensal

    for i in dados:
        if i['valor'] != 0.0:
            helper['dias'] += 1
            helper['total'] += i['valor']

    media = helper['total'] / helper['dias']

    # Somando os dias que obtiveram faturamento acima da média mensal

    for i in dados:
        if i['valor'] > media:
            dias += 1

    print(f'O número de dias em que o faturamento diário foi maior que a média mensal é de: {dias} dias')

diasAcimaDaMedia(dados)