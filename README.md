# cletsa (create-lit-element-typescript-app)
[![npm](https://img.shields.io/npm/v/cletsa.svg)](https://www.npmjs.com/package/cletsa)

Starter kit for making apps with [LitElement](https://lit-element.polymer-project.org/) and [TypeScript](https://www.typescriptlang.org/).

## Getting started
```
npx cletsa app/
cd app/
npm start
```

## Folder structure
```
app/
  src/
    container.ts
    counter.ts
    index.html
    index.ts
  .gitignore
  package.json
  tsconfig.json
  webpack.config.js
```

## Tooling
cletsa is set up with [webpack](https://webpack.js.org/) to bundle the app and to provide a local, developmental server.

## Scripts
- `npm run start` (or `npm start`): Start the dev server.
- `npm run build`: Build a production version of the app.
- `npm run clean`: Clean up any builds.
