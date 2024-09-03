# CineList

Uma aplicação web para pesquisar e gerenciar uma lista de filmes favoritos, integrando-se com a API do The Movie Database (TMDb).

## Descrição

O CineList permite que os usuários pesquisem filmes, vejam detalhes, e salvem seus favoritos em uma lista personalizada.
A aplicação faz chamadas à API do TMDb para obter informações atualizadas sobre os filmes, incluindo notas (rating) e sinopses.

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
   git clone https://github.com/kcezario/CineList.git
   cd CineList
   ```

2. Crie e ative um ambiente virtual para o Django (back-end):
   ```bash
   cd .\CineList\back-end
   python -m venv .venv
   source .venv/bin/activate  # Linux/macOS
   .venv\Scripts\activate  # Windows
   ```

3. Instale as dependências do Django:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure o banco de dados PostgreSQL:
   - Crie um banco de dados PostgreSQL.
   - Atualize as configurações de banco de dados no arquivo `settings.py` ou adicione as informações de conexão no arquivo `.env` conforme necessário:
     ```env
     DB_NAME=seu_banco_de_dados
     DB_USER=seu_usuario
     DB_PASSWORD=sua_senha
     DB_HOST=localhost
     DB_PORT=5432
     ```
   - Execute as migrações do banco de dados:
     ```bash
     python manage.py migrate
     ```

5. Configure as variáveis de ambiente:

   - **Backend**:
     - O arquivo `.env` para o backend deve estar na raiz do projeto, no mesmo nível da pasta `back-end`.
   
   - **Frontend**:
     - O arquivo `.env` para o frontend deve estar dentro da pasta `front-end`, no mesmo nível do arquivo `package.json`.


6. Instale as dependências do React (front-end):
   ```bash
   cd .\CineList\front-end  # Navegue até o diretório do front-end
   npm install
   ```

7. Pronto! Agora você pode iniciar os servidores para o Django e o React.

## Uso

1. Inicie o servidor Django:
   ```bash
   cd .\CineList\back-end
   python manage.py runserver
   ```

2. Inicie o servidor de desenvolvimento do React para o front-end:
   ```
   cd .\CineList\front-end
   npm run dev
   ```

3. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

## Endpoints da API

### Filmes
- `GET /movies/search?q=<query>`: Pesquisa filmes por título.
- `POST /movies/fav/add/<int:movie_id>/`: Adiciona um filme aos favoritos.
- `DELETE /movies/fav/remove/<int:movie_id>/`: Remove um filme dos favoritos.
- `GET /movies/fav/list/`: Lista todos os filmes favoritos do usuário.
- `GET /movies/fav/generate-link/`: Gera um link compartilhável para a lista de favoritos.
- `GET /movies/shared/<str:token>/`: Retorna a lista de filmes favoritos compartilhada baseada em um token.
- `GET /movies/top/rated/`: Retorna os filmes mais bem avaliados.
- `GET /movies/top/popular/`: Retorna os filmes mais populares.
- `GET /movies/top/now_playing/`: Retorna os filmes que estão em cartaz.
- `GET /movies/<int:id>/`: Retorna os detalhes de um filme específico.

### Usuários
- `POST /api/users/register/`: Registra um novo usuário.
- `POST /api/users/login/`: Realiza o login do usuário.
- `POST /api/users/logout/`: Realiza o logout do usuário.
- `GET /api/users/check-auth/`: Verifica o status de autenticação do usuário.

## Tecnologias Utilizadas

- **Backend**: Python, Django
- **Frontend**: React
- **Deploy**: Vercel

## Deploy

O projeto está publicado na Vercel e pode ser acessado [aqui](https://cine-list-front-end.vercel.app/).

## Contato

Para mais informações, entre em contato:

- **Nome**: Kauê Cezário Cunha
- **Email**: [kcezario.ep@gmail.com](mailto:kcezario.ep@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/](https://www.linkedin.com/in/kau%C3%AA-cez%C3%A1rio-cunha-a7a026273/)
- **GitHub**: [https://github.com/kcezario](https://github.com/kcezario)

