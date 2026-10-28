# 📝 ToDo List

Aplicação web de gerenciamento de tarefas desenvolvida com **React, TypeScript, Vite e Tailwind CSS**. O projeto permite criar, editar, concluir e excluir tarefas, além de acompanhar a quantidade de tarefas cadastradas e concluídas.

## ✨ Funcionalidades

- **Criar tarefas:** adicionar novas tarefas à lista.
- **Editar tarefas:** modificar o título de uma tarefa existente.
- **Concluir tarefas:** marcar tarefas como concluídas ou reabri-las.
- **Excluir tarefas:** remover tarefas que não são mais necessárias.
- **Resumo de tarefas:** visualizar a quantidade de tarefas criadas e concluídas.
- **Persistência de dados:** armazenar as tarefas no `localStorage` do navegador, mantendo os dados após atualizar a página.
- **Indicadores de carregamento:** exibir animações de carregamento enquanto as tarefas são preparadas.
- **Componentes reutilizáveis:** utilizar componentes padronizados para botões, campos de entrada, cartões, ícones e outros elementos da interface.

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/) — construção da interface com componentes.
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática e maior segurança no desenvolvimento.
- [Vite](https://vite.dev/) — servidor de desenvolvimento e ferramenta de build.
- [Tailwind CSS](https://tailwindcss.com/) — estilização da interface.
- [React Router](https://reactrouter.com/) — gerenciamento de rotas.
- [use-local-storage-state](https://github.com/astoilkov/use-local-storage-state) — gerenciamento de estado sincronizado com o armazenamento local.
- [Class Variance Authority](https://cva.style/docs) — gerenciamento de variantes de componentes.
- [ESLint](https://eslint.org/) — análise estática e padronização do código.

## 📋 Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Substitua `URL_DO_REPOSITORIO` pelo endereço do repositório Git.

### 2. Entre na pasta do projeto

```bash
cd Todo
```

### 3. Instale as dependências

```bash
pnpm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

## 📁 Estrutura do projeto

```text
Todo/
├── public/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   ├── core-components/
│   ├── helpers/
│   ├── hooks/
│   ├── models/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Organização das pastas

- **`assets/`**: arquivos SVG, ícones e imagens utilizados na interface.
- **`components/`**: componentes reutilizáveis, como botões, textos, campos de entrada, cartões e indicadores de carregamento.
- **`core-components/`**: componentes principais da aplicação, como lista de tarefas, item de tarefa, cabeçalho, rodapé e resumo.
- **`helpers/`**: funções auxiliares utilizadas em diferentes partes do projeto.
- **`hooks/`**: hooks personalizados para consultar, criar, atualizar, concluir e excluir tarefas.
- **`models/`**: interfaces e definições de tipos, incluindo o modelo `Task` e os estados das tarefas.
- **`pages/`**: páginas e estruturas de layout da aplicação.

## 💾 Armazenamento de dados

As tarefas são armazenadas no `localStorage` do navegador por meio da chave `tasks`. Dessa forma, os dados permanecem disponíveis no mesmo navegador após recarregar a página.

Como o armazenamento é local, as tarefas não são sincronizadas automaticamente entre dispositivos ou navegadores diferentes.

## 🎨 Interface

A aplicação utiliza uma identidade visual personalizada, com tons de rosa, verde e cinza, tipografia Cairo e componentes com diferentes variantes visuais. A interface também conta com ícones SVG e indicadores de carregamento para melhorar a experiência de uso.

---

Desenvolvido como projeto de estudo de desenvolvimento front-end.
