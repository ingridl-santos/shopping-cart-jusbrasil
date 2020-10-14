# JusBrasil - Frontend Challange

Aplicação proposta pela JusBrasil como desafio técnico no processo de seleção para Frontend Engineer. Aplicação consiste de um carrinho de compras onde o usuário pode selecionar os produtos para compras e realizar o pagamento.

<details>
  <summary> Desafio: Carrinho de Compras </summmary>

Este é um desafio para testar seus conhecimentos em JavaScript ou TypeScript e Graphql.

Neste teste existem várias respostas corretas, pois o objetivo é avaliar a sua forma de codificação, e suas habilidades usando a tecnologia proposta.

Para o desafio [COMPLETO] é preciso usar uma tecnologia de backend e banco de dados de sua preferência.

## Obrigatoriedades

O projeto deve ser desenvolvido em Javascript ou TypeScript e Graphql consumindo as APIs (utilize a tecnologia de sua escolha) e utilizando banco de dados (de sua preferência também).

Os produtos disponíveis devem ser recuperados através do Graphql.

[COMPLETO] O GraphQL, por sua vez, acessará sua(s) API(s).

## Carrinho de Compras

Seu objetivo é montar um carrinho de compras simples, conforme o prototipo a seguir:

O layout deve ser como de um site de vendas convencional, com uma listagem de produtos e um ícone de carrinho de compras no topo do site.

O ícone do carrinho de compras deve exibir uma badge com a quantidade de itens presente no carrinho.

Ao finalizar a compra no carrinho, deverá ser direcionado a uma tela de checkout para pagamento somente com cartão de crédito e com persistência do pedido ao concluir com sucesso.

A tela de listagem de produtos deve:

- Listar produtos
  - Ao entrar no projeto, deve exibir os produtos na listagem com foto, titulo e preço formatado em reais. Esses produtos devem estar cadastrados no banco de dados;
  - Ao clicar no produto da lista, deve exibir os detalhes de um produto individual;
- Permitir comprar
  - Ao clicar em comprar e o produto não estiver no carrinho, deve ser adicionado;
  - Ao clicar em comprar e o produto ja existir no carrinho, deve ser incrementado em 1;
- Exibir resumo do carrinho
  - Exibir no ícone do carrinho uma badge com quantidade de itens;
  - Exibir ao lado do icone, o valor total da compra;

O carrinho deve:

- Permitir remover itens;
  - Ao remover, liberar o estoque do produto;
- Permitir alterar a quantidade de um item;
  - Ao clicar em aumentar, deve incrementar em 1;
  - Ao clicar em diminuir, deve decrementar em 1;
  - Ao incrementar, deve validar se o produto ainda possui estoque;
  - Ao decrementar, deve liberar o estoque do produto;
  - Não deve permitir o usuário informar quantidade zero;
- Exibir o somatório total dos itens incluidos;
- Exibir botão para concluir a compra e direcionar para a tela de checkout;

[COMPLETO] A tela de checkout deve:

- Ter um número de cartão que sempre aprova os pagamentos e outro que sempre os reprova;
- Ao concluir, checar se existe estoque;
- Persistir o pedido no banco de dados ao confirmar a compra;

## Alguns pontos que serão analisados:

- Organização do código
- Testes
- Facilidade ao rodar o projeto
</details>

## Tecnologias utilizadas

Para a realização desse projeto foram utilizadas as seguintes tecnologias:

#### Backend

1. Apollo-server-express
2. Express
3. Typeorm
4. Graphql
5. Cors
6. Crypto-js
7. Sqlite
8. UUIDv4
9. Typescript

#### Frontend

1. Reactjs
2. Apollo-client
3. Crypto-js
4. Graphql
5. React-redux
6. React-router-dom
7. React-toastify
8. Redux
9. Redux-saga
10. Styled-components
11. Reactotron-react-js
12. Reactotron-redux
13. Typescript

## Arquitetura

A estrutura do projeto foi montada de forma a garantir a sua manutenção e organização.

#### Estrutura do Backend

```dir
backend/
┣ src/
┃ ┣ config/
┃ ┃ ┗ config.ts
┃ ┣ db/
┃ ┃ ┣ migrations/
┃ ┃ ┃ ┣ 1602031833667-createProduct.ts
┃ ┃ ┃ ┣ 1602031952669-createOrder.ts
┃ ┃ ┃ ┗ 1602031997420-createCreditCard.ts
┃ ┃ ┗ index.ts
┃ ┣ models/
┃ ┃ ┣ creditCard.ts
┃ ┃ ┣ order.ts
┃ ┃ ┗ product.ts
┃ ┣ resolvers/
┃ ┃ ┣ CreditCards/
┃ ┃ ┃ ┣ creditCardType.ts
┃ ┃ ┃ ┗ index.ts
┃ ┃ ┣ Orders/
┃ ┃ ┃ ┣ index.ts
┃ ┃ ┃ ┗ ordersType.ts
┃ ┃ ┗ Products/
┃ ┃   ┣ index.ts
┃ ┃   ┗ productType.ts
┃ ┗ server.ts
┣ .editorconfig
┣ db.sqlite3
┣ ormconfig.json
┣ package-lock.json
┣ package.json
┣ tsconfig.json
┗ yarn.lock
```

- **config:** configuração da key utilizada pelo crypto.js para criptografia dos dados de cartão de crédito.
- **db:** configuração das migrations e conexão do banco de dados
- **models:** arquivos de modelagem das entidades de Produto, Carrinho e Cartão de Cŕedito utilizadas na aplicação.
- **resolvers:** implementação das funções responsáveis pela população de dados no schema.

#### Estrutura do Frontend

```dir
frontend/
┣ public/
┃ ┗ index.html
┣ src/
┃ ┣ assets/
┃ ┃ ┣ cart.svg
┃ ┃ ┣ checkout_failed.svg
┃ ┃ ┣ checkout_success.svg
┃ ┃ ┗ logo.png
┃ ┣ components/
┃ ┃ ┗ Header/
┃ ┃   ┣ index.tsx
┃ ┃   ┗ styles.ts
┃ ┣ config/
┃ ┃ ┣ config.ts
┃ ┃ ┗ reactotronConfig.ts
┃ ┣ graphql/
┃ ┃ ┣ CreditCard/
┃ ┃ ┃ ┣ queries.ts
┃ ┃ ┃ ┗ types.d.ts
┃ ┃ ┣ Order/
┃ ┃ ┃ ┣ queries.ts
┃ ┃ ┃ ┗ types.d.ts
┃ ┃ ┗ Product/
┃ ┃   ┣ queries.ts
┃ ┃   ┣ request.ts
┃ ┃   ┗ types.d.ts
┃ ┣ pages/
┃ ┃ ┣ Cart/
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ styles.ts
┃ ┃ ┣ Checkout/
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ styles.ts
┃ ┃ ┣ DetailProduct/
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ styles.ts
┃ ┃ ┗ Home/
┃ ┃   ┣ index.tsx
┃ ┃   ┗ styles.ts
┃ ┣ store/
┃ ┃ ┣ Reducers/
┃ ┃ ┃ ┣ cart/
┃ ┃ ┃ ┃ ┣ actions.ts
┃ ┃ ┃ ┃ ┣ reducer.ts
┃ ┃ ┃ ┃ ┗ types.d.ts
┃ ┃ ┃ ┗ rootReducer.ts
┃ ┃ ┗ index.js
┃ ┣ styles/
┃ ┃ ┗ global.ts
┃ ┣ utils/
┃ ┃ ┗ currencyFormat.ts
┃ ┣ App.tsx
┃ ┣ index.tsx
┃ ┣ react-app-env.d.ts
┃ ┣ routes.tsx
┃ ┗ setupTests.ts
┣ .editorconfig
┣ .eslintignore
┣ .eslintrc.json
┣ .gitignore
┣ README.md
┣ package.json
┣ prettier.config.js
┣ tsconfig.json
┗ yarn.lock
```

- **assets:** icons e logo utilizados na aplicação
- **components:** componentes reusáveis e utilizado na composição da página Home e Details Product
- **config:** configuração da chave crypto-js e reactotron (utilizado para inspecionar toda a aplicação)
- **graphql:** implementação das queries e request para API da aplicação
- **pages:** telas da aplicação
- **store:** state e reducer utilizados na aplicação
- **styles:** estilização global da aplicação
- **utils:** funções utéis, como a formatação da moeda para \_

## Uso

Faça o download ou fork e clone do repositório na sua máquina local e então instale as dependências do projeto.

#### Instalação

No diretório **backend**:

```cmd
yarn install
```

No diretório **frontend**:

```cmd
yarn install
```

#### Execução

No diretório **backend**:

```cmd
yarn start
```

O playground da API Graphql será executada em `http://localhost:4000/graphql`

No diretório **frontend**:

```cmd
yarn start
```

A aplicação deverá iniciar automaticamente no seu navegador.
