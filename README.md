# Next.js Pedro Dashboard Application

## Project Overview

This is a modern dashboard application built with Next.js, featuring authentication flows, responsive design, and comprehensive data visualization. The project leverages cutting-edge technologies including:

- **Next.js 14** (App Router)
- **shadcn/ui** component library
- **Recharts** for data visualization
- **Tailwind CSS** for styling
- **TypeScript** for type safety

## Table of Contents

1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Key Features](#key-features)
5. [Technology Stack](#technology-stack)
6. [Deployment](#deployment)
7. [Contributing](#contributing)

## Project Structure

```
/
├── app/
│   ├── (auth)/                  # Authentication routes
│   ├── (dashboard)/             # Protected dashboard routes
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
│
├── components/
│   ├── dashboard/               # Dashboard-specific components
│   ├── navigations/             # Navigation components
│   ├── shared/                  # Reusable shared components
│   └── ui/                      # shadcn/ui components
│
├── types/                       # TypeScript type definitions
├── data/                        # Mock data and constants
├── providers/                   # Context providers
│
├── public/                      # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm/bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Update the values in `.env.local` with your configuration.

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Development Workflow

### Key Scripts

- `dev`: Starts the development server
- `build`: Creates an optimized production build
- `start`: Starts the production server
- `lint`: Runs ESLint for code quality checks
- `type-check`: Verifies TypeScript types
- `format`: Formats code with Prettier

### Styling Guidelines

This project uses Tailwind CSS with the following conventions:

- Custom colors are defined in `tailwind.config.js` using the `custom` prefix (e.g., `customPrimary-500`)
- Component-specific styles are colocated with components
- Global styles are in `styles/globals.css`

## Key Features

### Authentication System
- Secure login/logout flows
- Protected routes
- Session management

### Dashboard Functionality
- Responsive layout with navigation
- Notification system with real-time updates
- Customizable alert system
- Theme toggler (light/dark mode)

### Data Visualization
- Interactive charts using Recharts
- Data filtering and sorting
- Responsive chart components

### UI Components
- Comprehensive component library using shadcn/ui
- Custom notification components
- Reusable form elements
- Accessible modal dialogs

## Technology Stack

### Core
- **Next.js 14**: React framework with App Router
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework

### UI Components
- **shadcn/ui**: Radix-based component library
- **Lucide Icons**: Beautiful SVG icons
- **clsx**: Conditional className utility

### Data Visualization
- **Recharts**: Composable charting library
- **date-fns**: Modern date utilities

### State Management
- React Context API
- Custom providers for global state

## Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Create a new project in Vercel
3. Import your repository
4. Add environment variables
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

For other platforms, ensure you:

1. Set up proper environment variables
2. Configure the correct build command (`npm run build`)
3. Set the output directory to `.next/static`

## Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

### Code Standards
- Follow existing patterns and conventions
- Include TypeScript types for all new code
- Write meaningful commit messages
- Keep components small and focused

## License

[MIT](https://choosealicense.com/licenses/mit/)