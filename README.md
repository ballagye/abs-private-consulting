# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@1.1.1 create --template minimal --types ts --add prettier eslint --install npm abs-vip-consulting
```

## Adding features

Add features to your project with `sv add`:

```sh
npx sv add
```

For example, to add Tailwind CSS:

```sh
npx sv add tailwindcss
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## ABS VIP Consulting — structure du site

- `src/app.css` : variables, grain, orchestration chargement + scroll
- `src/lib/components/` : Loader, Header, Hero, About, Services, Method, Membership, Founder, Brochures, Contact, Footer
- `src/lib/components/DetailDialog.svelte` : AlertDialog `bits-ui`, stylé via les `data-*`
- `src/lib/data/site.ts` : contenus ; `src/lib/actions/reveal.ts` : révélations au scroll
- `static/images`, `static/documents` : médias issus du dépôt ABS
