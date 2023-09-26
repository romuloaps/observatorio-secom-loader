# Observatório SECOM - Loader
Carregador de dados do observatório a partir dos arquivos da SECOM.
Esses dados são fornecidos pelo [Planejamento de mídia do SICOM](https://gestaosecom.mcom.gov.br/gestaosecom/seguranca/dados-abertos/veiculacoes-autorizadas) em formato `CSV`.

## Atribuições
- Fazer o download de todos os arquivos de cada ano e para cada novo ano
- Processar o arquivo transformando o `CSV` em uma estrutura de dados mais adequada para se trabalhar em outro contexto, como JSON
- Carregar uma base dados MongoDB com os dados processados

## Objetivo
Tornar os dados da SECOM mais acesssíveis para o consumo visual
