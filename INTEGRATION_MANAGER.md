# Liaison CakeSpot public ↔ CakeSpot Manager

Le gestionnaire persisté est disponible via `GET /api/catalogue`. Le site public garde son catalogue local comme fallback et tente la source distante uniquement lorsque `window.CAKESPOT_MANAGER_API_URL` est renseigné.

Après publication de CakeSpot Manager, renseigner son origine publique dans `JS/catalogue-config.js` :

```js
window.CAKESPOT_MANAGER_API_URL = 'https://manager.example.com';
```

Le endpoint public retourne les produits publiés sous les champs `publicId`, `name`, `category`, `imageUrl`, `price`, `priceNumber`, `description`, `rating`, `flavors`, `info` et `details`. Les mutations restent protégées par l’authentification Manus et le rôle administrateur.
