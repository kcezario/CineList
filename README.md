
# CineList

Uma aplicação web para pesquisar e gerenciar uma lista de filmes favoritos, integrando-se com a API do The Movie Database (TMDb).

## Descrição

O CineList permite que os usuários pesquisem filmes, vejam detalhes, e salvem seus favoritos em uma lista personalizada. A aplicação faz chamadas à API do TMDb para obter informações atualizadas sobre os filmes, incluindo notas (rating) e sinopses.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Deploy](#deploy)
- [Contato](#contato)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/CineList.git
   cd CineList
   ```

2. Crie e ative um ambiente virtual:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Linux/macOS
   .venv\Scripts\activate  # Windows
   ```

3. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` baseado no `.env.example` e adicione sua chave da API do TMDb.

## Uso

1. Inicie o servidor Django:
   ```bash
   python manage.py runserver
   ```

2. Acesse a aplicação no navegador:
   ```
   http://127.0.0.1:8000
   ```

## Endpoints da API

- `GET /api/movies/search?q=<query>`: Pesquisa filmes por título.
- `POST /api/movies/favorite/<id>`: Adiciona um filme aos favoritos.
- `GET /api/movies/favorites/`: Lista todos os filmes favoritos do usuário.

## Tecnologias Utilizadas

- **Backend**: Python, Django
- **Frontend**: React
- **Deploy**: Vercel

## Deploy

O projeto está publicado na Vercel e pode ser acessado [aqui](https://cine-list-five.vercel.app).

## Contato

Para mais informações, entre em contato:

- Nome: Seu Nome
- Email: seu.email@dominio.com
