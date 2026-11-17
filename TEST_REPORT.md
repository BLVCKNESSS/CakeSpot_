

## Intégration CakeSpot Manager — 17 novembre 2026

Le gestionnaire CakeSpot Manager expose `GET /api/catalogue` avec 76 créations, cinq catégories, des identifiants uniques et les champs nécessaires au rendu public. Le endpoint `/api/health` répond `200` avec `status: ok`, le manifeste `/manus-routes.json` répond en JSON, le build Vite/Express termine correctement, `pnpm check` passe et les six tests Vitest du starter passent.

Le site public a été testé avec l’API du gestionnaire configurée temporairement sur le serveur local : le marqueur `data-catalogue-source="manager"` est présent et 12 cartes de la première page sont rendues sans fallback. Le fallback local reste activé lorsque `JS/catalogue-config.js` ne contient pas encore l’origine publique du gestionnaire.

La configuration de production est documentée dans `INTEGRATION_MANAGER.md`. Après publication du gestionnaire, remplacer la valeur vide de `window.CAKESPOT_MANAGER_API_URL` par son origine publique, puis republier le site public.
