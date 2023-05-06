# SuperEffective

[![Check Code Quality](https://github.com/itsjavi/supereffective/actions/workflows/check-code-quality.yml/badge.svg)](https://github.com/itsjavi/supereffective/actions/workflows/check-code-quality.yml)
[![wakatime](https://wakatime.com/badge/github/itsjavi/supereffective.svg)](https://wakatime.com/badge/github/itsjavi/supereffective)

Source code for supereffective.gg 's website.

## Software Stack

We use the following technologies, services and tools:

- We use Node v18 LTS
- pnpm v8 for package management
- Turborepo (turbo) to accelerate running scripts
- NextJS 13 + React 18 for the website
- CSS Modules for styling without styling libraries (to be integrated with TailwindCSS in v4)
- React Context for state management (to be replaced by Redux Toolkit in v4)
- MDX + [FrontMater CMS](https://frontmatter.codes/) as the local/static CMS
- Firebase for authentication and dex data storage (to be replaced by Auth.js, Prisma and Neon.tech PostgreSQL)
- Vercel (Pro tier) for hosting and deployments
- GitHub for hosting [static data and spritesheets](https://github.com/itsjavi/supereffective-assets)
- CloudFlare for caching and DNS
- Maildev as a local
- Other tools: ESLint, Prettier, Husky, etc.

This repository is a Turbo monorepo, meaning it contains multiple packages and apps.

## Project Structure

The main application is the website, which is located in `./packages/website`.
The MDX files for pages and articles are located under the `./cms` directory.

Website is a NextJS application with the following structure:

**`./packages/website`:**

- `data`: data imported from `itsjavi/supereffective-assets`. This should never be edited manually.
- `public`: static assets (for the UI and also for the CMS pages)
- `scripts`: build and maintenance scripts
- `src`:
  - `apps`: root-level app components (this is not a NextJS 13 `app` dir structure)
  - `config`: general app config (e.g. from env vars, json files or ts code)
  - `features`: business logic in bounded contexts, following some DDD principles
    - `/**/`: name of the domain / feature
      - `hooks`: hooks specific to this domain
      - `state`: domain state: contexts, objects and types
      - `views`: domain views: components and page components
  - `hooks`: reusable hooks
  - `layouts`: reusable page skeletons / themes
  - `pages`: next routes/pages and APIs
  - `primitives`: reusable components without business logic or global state
  - `services`: infrastructure interfaces/types and their implementations
  - `state`: global state context, object and types
  - `styles`: global css styles
  - `utils`: reusable generic functions that do not belong to services or to a specific domain

> All code that it's subject to be rewritten and refactored is under `src/*/legacy/` subfolders or has
> "legacy" as part of the filename.

## Monorepo packages

- auth: Authentication abstraction layer
- config: Project confing and env vars wrapper
- database: Database abstraction layer. It also abstracts the Pokemon JSON data from supereffective-assets.
- firebase: Firebase abstraction layer (only needed for website v3).
- mdx: MDX abstraction layer (loader and react components).
- noxt: NextJS abstraction layer (WIP)
- ui: Stateless UI components, assets, fonts, SVGs, and tools. Uses TailwindCSS and Lucide Icons.
- utils: Generic utilities for various environments (universal, commonjs, react, nextjs)
- website: v3 site, using Next pages dir
- website-beta: v4 site (WIP), using Next app dir

## Prerequisites

You will need Docker, Node v18 LTS and pnpm v8.

## Quick Start

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Configure your DB connection strings.
   You can uncomment the `db` service in `docker-compose.yml` to spawn a local DB, or use a provider like Neon.tech,
   then configure the database env vars in:

- packages/database/.env
- packages/website/.env.local
- packages/website-beta/.env.local

1. Run the website in development mode: run any of: `pnpm dev:docker` / `docker compose up -d` / `make`.
2. Open http://localhost:3001 or run `pnpm open` to open the website in your browser. Other URLs:
   - Beta website: http://localhost:3002
   - Dev Mail server: http://localhost:1080
   - Prisma Studio: http://localhost:5555

## Maintenance scripts

- `pnpm build`: builds the website.
- `pnpm update:packages`: update all dependencies to their latest version (a shortcut for `pnpm update -r --latest`).
- `pnpm update:data`: update the data from `itsjavi/supereffective-assets` repo.
- `make code`: updates the generated code (e.g. enums from JSON data, prettify code or prisma client files)

For other scripts, please check the `package.json` files.

### Running scripts in an isolated Docker environment

Start a shell inside the docker container, you can run `pnpm docker:sh`.
It is a shortcut for `docker-compose run --rm dev /bin/zsh`.

Alternatively you can run any script directly inside the container by using `docker-compose run --rm dev`
with any arguments, e.g. `docker-compose run --rm dev pnpm build`.
There is also a shortcut for it: `pnpm docker`.

## Dependencies

- Q: Why packages like "turbo" or "eslint" are under "dependencies" instead of "devDependencies"?
- A: Because on Vercel, the "devDependencies" are not installed, and NextJS apps need many of them during the build
  process (especially ESLint plugins and configs and all their dependencies).

## Contributing

Contributions are welcome! Please read the [contributing guidelines](./CONTRIBUTING.md) before submitting a PR.

## License

At the moment, this project uses a [private software license](./LICENSE.md).

All contributors that have access to this project and/or has contributed to it,
will automatically agree to the terms of this license.
