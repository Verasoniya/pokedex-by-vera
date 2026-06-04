# Pokedex by Vera

Live Demo: https://pokedex-by-vera.vercel.app/

A React + TypeScript Pokedex application built using PokeAPI.

## Screenshots

### Home Page

![Home Page](./docs/home.jpeg)

### Pokemon Detail

![Pokemon Detail](./docs/detail.jpeg)

### All Pokémon and Filter by Type

![Filter](./docs/all-pokemon.jpeg)

## Features

- Browse Pokémon with infinite scrolling
- View Pokémon details
- View Pokémon official artwork
- Filter Pokémon by type
- Data fetching and caching with React Query
- Unit tests for Pokémon services

## Tech Stack

- React 19
- React Router 7
- TypeScript
- React Query
- Axios
- Tailwind CSS
- Vitest

## API

This project uses PokeAPI:

https://pokeapi.co/

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone repository

```bash
git clone <repository-url>
cd pokedex-by-vera
```

2. Install dependencies

```bash
npm install
```

3. Create environment file

Create `.env` file in project root:

```env
VITE_API_URL=https://pokeapi.co/api/v2
```

4. Run development server

```bash
npm run dev
```

5. Open browser

```text
http://localhost:5173
```

## Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build Application

```bash
npm run build
```

### Type Check

```bash
npm run typecheck
```

### Run Unit Tests

```bash
npm run test
```

### Run Tests Once

```bash
npm run test:run
```

## Project Structure

```text
app/
├── components/
├── hooks/
├── routes/
├── services/
├── types/
└── utils/
```

## Unit Tests

The application includes unit tests for:

- getPokemonList
- getPokemonDetail
- getTypeList
- getPokemonByType

Tests are implemented using Vitest.

## Author

Septi Vera Soniya
