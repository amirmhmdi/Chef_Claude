# 👨‍🍳 Chef Claude

A React app that suggests recipes based on the ingredients you have at home — powered by Anthropic's **Claude AI**.

Type in whatever ingredients are sitting in your fridge or pantry, and Chef Claude will generate a recipe idea using them, helping reduce food waste and answer the eternal question: *"what can I make with this?"*

## ✨ Features

- **Ingredient input** — add ingredients one by one to build your list
- **AI-generated recipes** — sends your ingredient list to the Claude API and returns a recipe suggestion
- **Dynamic UI** — ingredient list updates in real time as you add items
- **Markdown-rendered output** — recipe results are formatted and easy to read

## 🛠 Tech Stack

- **React** (JavaScript)
- **Vite**
- **Claude API** (Anthropic) for recipe generation

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- An Anthropic API key ([get one here](https://console.anthropic.com/))

### Installation

```bash
git clone https://github.com/amirmhmdi/Chef_Claude.git
cd Chef_Claude
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and add your Claude API key:

```bash
cp .env.example .env
```

### Run the app

```bash
npm run dev
```

## ⚠️ Note

This project calls the Anthropic API directly from the client for demo/learning purposes. In a production app, API calls should go through a backend server to keep your API key secure.
