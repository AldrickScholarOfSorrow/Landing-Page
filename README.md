# 🌍 Landing Page — Conflitos Globais

Site com sistema de exposição de dados de conflitos ativos no mundo. Criado com **React + Vite + Tailwind CSS**.  
Parte do projeto acadêmico de Desenvolvimento de Software Multiplataforma, que futuramente exibirá dados de **conflitos ativos no mundo** via APIs como **ACLED** e **RestCountries**.

## 🚀 Tecnologias
- React
- Vite
- Tailwind CSS

## 🧱 Estrutura do Projeto

O projeto é dividido em duas partes principais: o **Frontend** (React) e o **Backend** (Flask).

### Frontend (`/src`)

```text
src/
├── assets/             # Imagens e outros arquivos estáticos.
├── componentes/        # Componentes de layout reutilizáveis.
|   ├── ConflictCard.jsx  # Card individual para exibir um conflito.
|   ├── Footer.jsx
|   └── Header.jsx
├── pages/              # Componentes que representam as páginas da aplicação.
|   ├── Conflitos.jsx     # Página principal para listar e gerenciar conflitos (CRUD).
|   ├── Global.jsx        # Página para exibir estatísticas globais.
|   └── LandingPage.jsx   # Página inicial de apresentação do projeto.
├── App.jsx             # Componente raiz que define o layout e as rotas.
├── index.css           # Arquivo de estilos globais e diretivas do Tailwind.
└── main.jsx            # Ponto de entrada da aplicação React.
```

### Backend (`/backend`)

```text
backend/
├── controllers/
|   └── conflito_controller.py  # Define as rotas da API (endpoints) para os conflitos.
├── models/
|   └── conflito_model.py       # Gerencia a lógica de dados (leitura e escrita no JSON).
├── temporary_data/
|   └── conflicts_data.json     # Arquivo que funciona como banco de dados temporário.
├── main.py                     # Ponto de entrada da aplicação Flask.
└── requirements.txt            # Lista de dependências do backend (Python).
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
