# Atlas Frontend Base

A minimal React + TypeScript template with basic routing setup, designed for quick frontend development starts.

## Features

- ⚡️ Vite for fast development and builds
- ⚛️ React 18
- 📝 TypeScript for type safety
- 🛣️ React Router for navigation
- 🔄 Hot Module Replacement (HMR)
- 📱 Responsive base setup

## Project Structure

```
src/
├── components/     # Reusable components
│   └── Navigation.tsx
├── pages/         # Page components
│   ├── Home.tsx
│   └── About.tsx
└── App.tsx        # Main application component
```

## Quick Start

1. Clone this template:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Development

The development server will start on port 5173 by default. Any changes you make to the source files will be reflected immediately in the browser thanks to HMR.

## Building for Production

Run `npm run build` to create a production build. The built files will be in the `dist` directory.
