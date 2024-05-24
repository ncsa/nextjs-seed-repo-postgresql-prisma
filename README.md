# Next.js Seed Repo for NCSA Web Projects

## Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
  - [TypeScript ESLint](https://typescript-eslint.io/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
  - TODO: Add DOM testing library

## Getting Started

After cloning the repository, install the dependencies:

```bash
npm install
```

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Code Style

This project uses both ESLint and Prettier to enforce code style. You can run the linter with:

```bash
npm run lint
```

You can run style checks with:

```bash
npm run style:check
```

Or automatically fix style issues with:

```bash
npm run style:fix
```

It is also recommended to update your editor settings to automatically format your code on save. Refer to the [Prettier documentation](https://prettier.io/docs/en/editors.html) for more information.

TODO: Consider whether to introduce Husky and Lint-Staged for pre-commit hooks

## Testing

This project uses Jest for testing. You can run the tests with:

```bash
npm run test
```

TODO: Add instructions for snapshot testing

## Docker

TODO: Add Dockerfile and docker-compose.yml

## Deployment

TODO: Add deployment instructions

## Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. It is recommended to check this documentation before making a commit.