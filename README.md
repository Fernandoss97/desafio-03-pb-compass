# Desafio 3 Programa de Bolsas Compass UOL

O projeto consiste no desenvolvimento de um site para uma empresa de reserva de tours fictícia, possuindo as páginas de login, home, tours e detalhes do tour.

- O projeto segue a estrutura full-stack com uma API para consumo da aplicação frontend.
- Toda a autenticação do sistema é feita através do Firebase, sendo possível realizá-la por meio de login e senha, conta google e conta do facebook.

## TECNOLOGIAS UTILIZADAS

- FRONT-END

  - React
  - Typescript

- BACK-END
  - Node.js
  - Typescript
  - Express
  - MongoDB via mongoose

## INICIALIZAÇÃO

Para executar o servidor localmente, siga as etapas abaixo:

1. Clone o repositório do GitHub e navegue até o diretório do backend:

```bash
$ git clone https://github.com/Fernandoss97/desafio-03-pb-compass.git
$ cd desafio-03-pb-compass .\backend
```

2. Instale as dependências do backend através do comando:

```
$ npm install
```

3. Configure as variáveis ​​de ambiente:

- Crie um arquivo `.env` na raiz do diretório `backend`
- No arquivo `.env`, crie as variáveis de ambiente com base no arquivo `.env.example`.

4. Execute o servidor do backend localmente através do comando:

```
$ npm run dev
```

5. Navegue até o diretório `frontend` e instale as dependências através do comando:

```
$ npm install
```

6. Execute a aplicação localmente:

```
$ npm run dev
```

- O comando iniciará a aplicação no modo de desenvolvimento e reiniciará automaticamente sempre que as alterações forem salvas.

## INFORMAÇÕES

- Projeto desenvolvido com o objetivo de atender aos requisitos do desafio 3 do programa de bolsas Full Stack Journey (Node.js & React) - AWS Cloud Context da Compass UOL.
