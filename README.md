# GLOBAL SOLUTION - Arandu
## 👥 **Desenvolvido Por**
| Nome | RM |
|------|----|
| Carlos Eduardo Sanches Mariano | 561756 |
| Vitor Ramos de Farias | 561958 |

## 💡 **Contexto e Problema**
O futuro do trabalho já começou. Tecnologias como Inteligência Artificial, robótica e automação estão transformando profissões e criando desafios inéditos. Ao mesmo tempo, mudanças sociais, demográficas e ambientais estão redesenhando a forma como vivemos, trabalhamos e nos relacionamos.

## 🎯 **Objetivo**
Desenvolver uma aplicação web interativa utilizando HTML, Tailwind CSS e React, que simule uma rede profissional voltada ao futuro do trabalho, permitindo exibir e explorar perfis de profissionais cadastrados, com informações pessoais, acadêmicas, profissionais e comportamentais.

## 📝 **Funcionalidades Principais**
- **Exibição de Perfis Profissionais**: Visualização detalhada de perfis com informações pessoais, acadêmicas, profissionais e comportamentais.
- **Quiz Comportamental**: Avaliação de características comportamentais dos usuários por meio de um quiz interativo.
- **Tema Claro/Escuro**: Opção para alternar entre temas claro e escuro para melhor experiência do usuário. Com persistência da preferência do usuário.
- **Filtro de Perfis**: Capacidade de filtrar perfis com base em diferentes critérios, como área e localização.
- **Navegação Intuitiva**: Interface amigável com navegação fácil entre diferentes seções da aplicação.
- **Responsividade**: Design responsivo para garantir uma experiência consistente em dispositivos móveis e desktops.

---

## ⚙️ **Arquitetura do Sistema**

### 🔄 **Estrutura de pastas:**
- backend/
  - controllers/ -> lógica de controle das rotas
  - repository/ -> lógica de acesso aos dados
  - routes/ -> definição das rotas da API
  - data/ -> banco de dados simulado com JSON
    - Candidates.json -> dados dos candidatos
    - Questions.json -> perguntas do quiz
  - server.js -> ponto de entrada do servidor
  - package.json -> dependências e scripts do backend
- frontend/
  - public/
      - logo/ -> logo da aplicação
      - perfil/ -> imagens de perfis de usuários
  - src/
    - components/
      - cards/ -> componentes de exibição de perfis
      - quiz/ -> componentes relacionados ao quiz comportamental
      - Header.jsx -> componente de cabeçalho
      - Footer.jsx -> componente de rodapé
    - pages/ -> páginas da aplicação
      - Home.jsx
      - Feed.jsx
      - Quiz.jsx
      - MensagemPage.jsx
    - context/ -> contexto para gerenciamento de estado global de tema
    - services/ -> serviços para comunicação com o backend
       - api.js -> configuração da API
       - CandidatesService.js -> serviços relacionados aos candidatos
       - QuizService.js -> serviços relacionados ao quiz
    - App.jsx -> componente raiz do React
    - Routes.jsx -> definição das rotas do frontend

### 🏗️ **Tecnologias Utilizadas**

#### **Backend:**
- **Express**: Framework para construção de APIs RESTful
- **Node.js**: Ambiente de execução JavaScript no servidor
- **Banco de dados simulado com arquivo JSON**: Armazenamento de dados simples e leve
- **Cors**: Middleware para habilitar CORS
- **javascript**: Linguagem de programação principal

#### **Frontend:**
- **React**: Biblioteca JavaScript para construção de interfaces de usuário
- **Vite**: Ferramenta de build rápida para projetos React
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva
- **react-router-dom**: Biblioteca para roteamento em aplicações React
- **context API**: Gerenciamento de estado global no React
- **componentes funcionais e hooks**: Abordagem moderna para construção de componentes React


---

## 🛠️ **Como Executar**

### **Pré-requisitos**
- Npm instalado na máquina
- Ide de sua preferência (VSCode recomendado)

### **🚀 Execução do Sistema Backend**
- Acesse a pasta `backend` no terminal:
  ```bash
  cd backend
  ```
- Instale as dependências:
  ```bash
  npm install
  ```
- Inicie o servidor:
  ```bash
  node Server.js
  ```

### **🌐 Execução do Frontend**
- Acesse a pasta `frontend` no terminal:
  ```bash
  cd frontend
  ```
- Instale as dependências:
  ```bash
  npm install
  ```
- Inicie a aplicação:
  ```bash
  npm run dev
  ```

### **🧪 Teste do Sistema**
e- Acesse o navegador e vá para `http://localhost:5173` para visualizar a aplicação frontend.

*Sistema desenvolvido para a Global Solution 2°semestre, 2025*  
