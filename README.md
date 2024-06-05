# Next.js Seed Repo for NCSA Web Projects

## Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma] (https://www.prisma.io/)
- [PostgreSQL] (https://www.postgresql.org/)
- [ESLint](https://eslint.org/)
  - [TypeScript ESLint](https://typescript-eslint.io/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
  - TODO: Add DOM testing library
- [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

Make sure you have Node.js Version 20 installed.

This project uses [bun](https://bun.sh) as package manager. After cloning the repository, install the dependencies:

```bash
bun install
```

To start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Database

This project uses [`prisma`](https://www.prisma.io/) as database ORM. Below are some handy commands to simplify database management using Prisma.

After making any changes to the schema, run the following command to generate the Prisma Client:

```bash
bun prisma generate
```

To push the current state of your database schema to the database, use:

```bash
bun prisma db push
```

To apply any pending migrations and ensure your database schema matches your code, run:

```bash
bun prisma migrate
```

To launch Prisma Studio, an interactive interface for managing your database, viewing and editing data, and running queries, use:

```bash
bun prisma studio
```

## Code Style

This project uses both ESLint and Prettier to enforce code style. You can run the linter with:

```bash
bun run lint
```

You can run style checks with:

```bash
bun run style:check
```

Or automatically fix style issues with:

```bash
bun run style:fix
```

It is also recommended to update your editor settings to automatically format your code on save. Refer to the [Prettier documentation](https://prettier.io/docs/en/editors.html) for more information.

TODO: Consider whether to introduce Husky and Lint-Staged for pre-commit hooks

## Testing

This project uses Jest for testing. You can run the tests with:

```bash
bun run test
```

Run the tests and generate coverage report

```bash
bun run test:cov
```

Update snapshots

```bash
bun run test -- -u
```

## CI pipeline

The [pipeline](.github/workflows/ci.yaml) automatically builds the project, runs tests, and checks code quality on every push or pull request to the main branch. Key steps include installing dependencies, building the project, running tests, and performing linting and style checks.

## Docker

To run a local development database, use:

```bash
docker compose up
```

This project also uses Docker to create and containerize a production build.

To build and run the application, use:

```bash
docker compose -f docker-compose-prod.yml up
```

## Deployment

TODO: Add deployment instructions

## Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. It is recommended to check this documentation before making a commit.
