# CCG - Central de Conflitos Globais

Este é um projeto Full Stack que consiste em uma aplicação web para catalogar e visualizar conflitos globais. A aplicação permite aos usuários visualizar, adicionar, editar e deletar informações sobre conflitos, que são armazenadas em um banco de dados PostgreSQL.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React**: Biblioteca para construção da interface de usuário.
- **Vite**: Ferramenta de build para um desenvolvimento frontend rápido.
- **Tailwind CSS**: Framework de CSS para estilização rápida e responsiva.
- **React Router DOM**: Para gerenciamento de rotas no lado do cliente.

### Backend
- **Flask**: Microframework Python para a construção da API REST.
- **PostgreSQL**: Banco de dados relacional para persistência dos dados.
- **Psycopg**: Driver para conectar a aplicação Flask ao PostgreSQL.
- **Flask-CORS**: Extensão para lidar com Cross-Origin Resource Sharing (CORS).

### Hospedagem
- **Render**: Para hospedagem do backend Flask e do banco de dados PostgreSQL.
- **Vercel / Netlify** (sugestão): Para hospedagem do frontend React.

---

## 🧱 Estrutura do Projeto

```text
backend/
├── controllers/
│   └── conflito_controller.py  # Lógica das rotas da API
├── models/
│   └── conflito_model.py       # Lógica de negócio e acesso ao DB
├── .env                        # Arquivo de variáveis de ambiente (NÃO versionado)
├── db.py                       # Configuração da conexão com o DB
├── main.py                     # Ponto de entrada da aplicação Flask.
└── requirements.txt            # Lista de dependências do backend (Python).

src/
├── componentes/                # Componentes React reutilizáveis
├── pages/                      # Páginas da aplicação (Global, Conflitos)
├── App.jsx                     # Componente principal e roteamento
└── main.jsx                    # Ponto de entrada da aplicação React
```

O projeto rodará em: http://localhost:5173

## 🎯 Objetivo
Site com sistema de exposição de dados de **conflitos ativos no mundo**, com futura integração planejada às APIs **ACLED** e **RestCountries**.

## 🖥️ Como executar
```bash
npm install
npm run dev

## 🌐 Deploy: https://landing-page-sigma-eosin.vercel.app/


Repositório público para fins acadêmicos.

✦ Autor: Pedro Siqueira Ferreira dos Reis Santos
✦ Curso: Desenvolvimento de Software Multiplataforma
✦ Instituição: Fatec Zona Leste 
