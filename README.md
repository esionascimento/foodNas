# Boas Vindas ao repositório FoodNas

## Sumário

- [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
- [Desenvolvimento](#desenvolvimento)
- [Para clonar o projeto](#para-clonar-o-projeto)
- [Regras de negócio](#regras-de-negócio)
- [EndPoint](#endpoint)
- [Deploy](#deploy)

## O que deverá ser desenvolvido

Desenvolver um Gestor de Pedidos na qual usa a API do IFood.

## Desenvolvimento

Aplicação desenvolvidade com `Reactjs`, `TypeScript`, `Nextjs`.

## Para clonar o projeto

1. Clone o repositório

- `git clone https://github.com/esionascimento/foodNas.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd foodNas`

2. Instale as dependências e inicialize o projeto

- Instale as dependências
  - `npm install`
- Configure as variáveis

- Inicialize o projeto:
  - `npm run dev`

## Regras de negócio

1. As informações relativas ao sistema devem ser persistidas usando uma API;
2. Para acessar o sistema o comerciante precisa passar por um processo de autenticação;
3. Confirmar ou Cancelar novos pedidos;
4. Vê detalhes dos pedidos após confirmar o pedido;
5. Despachar pedidos para entrega;
6. Trocar nome de usuário.

## EndPoint

A 3 rotas no projeto
endpoint:

- `/login` 'POST'
- `/user` 'GET', 'POST'
- `/authorization` 'POST'
- `/dashboard` 'GET', 'POST', 'PATCH'

## Deploy

Deploy para auxiliar

- <https://food-nas.vercel.app/>

## Variável de ambiente

1. `NEXT_PUBLIC_BASE_URL`

README baseado nos REDMEs da trybe
