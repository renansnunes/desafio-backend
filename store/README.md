
# Desafio CredPago

API REST para o *desafio de backend* da CredPago de um marketplace de Discos que será consumida por um aplicativo mobile e uma aplicação web, os itens serão colocados em um carrinho de compras e passados para a API para realizar uma transação e-commerce.

## Tecnologia

Foi utilizado **NodeJs** (*v8.16.0*) com frameworks para o servidor e **MongoDB** (*v3.2.7*) para o banco de dados.

#### Frameworks
**nodemon**  *(version 1.19.1)*:
Um utilitário que monitora quaisquer alterações em sua origem e reinicia automaticamente seu servidor. Perfeito para o desenvolvimento.

**hapijs**  *(version 18.3.1)*:
É uma estrutura de código aberto para aplicativos da web. O uso mais comum do hapi é construir serviços da web, como a API, sites e aplicativos de proxy HTTP.

**mongoose**  *(version 5.6.2)*:
Solução direta para modelagem de dados, conversão de tipo incorporada, validação, criação de consulta, ganchos de lógica de negócios e muito mais. Para facilitar a manipulação de dados com mongodb.

#### Debug/Testes
[**Postman**](https://www.getpostman.com/): Interface para fazer request.
[**HTTP Client**](encurtador.com.br/wALRZ): Extensão para Visual Studio Code para fazer request.
[**Robo 3T**](https://robomongo.org/): Interface para conectar com o mongo.

## Requisitos

**NodeJs(*^8.16.0*)** e **NPM (*^6.4.1*)**:
https://www.npmjs.com/get-npm

**MongoDB Server(*^4.0.10*)**:
https://www.mongodb.com/download-center/community

## Instalação

Inicialize o banco de dados mongodb, e após o mongo estar startado, siga os passos a seguir:

1. Faça o clone do projeto.

2. Na linha de comando, acesse a pasta `<diretório  do  projeto>/store`.

3. Execute o comando `npm install` para instalar os frameworks e suas dependências.

4. Execute o comando `npm start` para startar o servidor node.

5.  API fica disponível na **porta 3000**. `http://localhost:3000`

## Rotas

### 1. Produtos (Inserção e consulta)

### POST `/store/api/v1/product`

Adicionar produto no banco de dados.
Formato do JSON.

```json

{

"product_id":"d2eda25e-9757-11e9-bc42-526af7764f64",

"artist":"Pink Floyd",

"year":1973,

"album":"Dask Side of The Moon",

"price":250,

"store":"Minha Loja de Discos",

"thumb":"https://images-na.ssl-images-amazon.com/images/I/61R7gJadP7L._SX355_.jpg",

"date":"26/11/2018"

}
```
----
### GET `/store/api/v1/products`
Retornar uma lista de produtos.

----
### GET `/store/api/v1/products/{product_id}`
Retornar um produto especifico.

----
### 2. Carrinho (Inserção)
### POST `/store/api/v1/add_to_cart`

Adicionar item ao carrinho.

```json

{

"cart_id":"c5b6c552-9757-11e9-bc42-526af7764f64",

"client_id":"fac3591c-9785-11e9-bc42-526af7764f64",

"product_id":"d2eda25e-9757-11e9-bc42-526af7764f64",

"date":"26/11/2018"

"time":"18:33:12"

}
```  
----
### GET `/store/api/v1/cart`
Retornar uma lista de carrinhos de compra.

----
### GET `/store/api/v1/cart/{cart_id}`
Retornar um carrinho de compra especifico.

----
## Finalizar Compra (Inserção e Histórico)
### POST `/store/api/v1/buy`

Insere os dados da compra.

```json

{

"client_id":"fac3591c-9785-11e9-bc42-526af7764f64",

"cart_id":"c5b6c552-9757-11e9-bc42-526af7764f64",

"client_name":"John Snow",

"value_to_pay":280,

"credit_card":{

"number":"1234123412341234",

"cvv":111,

"exp_date":"06/22",

"card_holder_name":"John S"

}

}
```
----
### GET `/store/api/v1/history`

Histórico de compras realizadas na API.

---
### GET `/store/api/v1/history/{clientId}`

Retornar histórico de compras realizadas por um cliente específico.