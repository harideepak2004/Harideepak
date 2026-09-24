# Harideepak — Portfolio

Personal portfolio built with **React + Vite**, hosted on **Firebase Hosting**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Edit content

All text, projects, agents and skills live in **`src/data.js`**.
Add a project there and the page updates; no component changes needed.

Images and static files go in **`public/`** (e.g. `public/img/`).

## Deploy

Push to `main`. The GitHub Action runs `npm ci && npm run build`
and deploys the `dist/` folder to Firebase.
