# SharingCloud - Test technique front

Ce test consiste en la réalisation d'une application Web en exploitant une API fournie.
Le test devra être effectué selon les conditions et les contraintes indiquées dans ce document.

Différents niveaux sont proposés. Une fois que vous avez fini le premier niveau, vous pourrez passer au second, et ainsi de suite, la difficulté étant évidemment croissante.

Si vous êtes coincés à une étape, vous pouvez passer à la suite. Sachez que même si vous n'allez pas au bout d'un niveau, cela ne veut pas dire que le test est un échec. Nous avons mis en place ce test pour évaluer votre niveau et votre capacité d'adaptation vis-à-vis de problématiques de développement front.

# Le projet

Vous devez implémenter une application Web autonome.
Il s'agit d'une application permettant de réserver une salle à un instant T pour une durée donnée, selon un certain nombre de contraintes.
D'autres "utilisateurs" virtuels peuvent avoir déjà réservé un créneau.
Votre application doit pouvoir afficher :

- L'état actuel de la salle (disponible ou occupée, de quelle heure à quelle heure, par qui)
- La liste des réservations de la journée (forme libre, de préférence une timeline)
- La possibilité de réserver la salle pour une durée donnée
  - La réservation s'effectue en durée à partir de maintenant (réserver pour 10 minutes, par exemple)
  - Le sélecteur de durée doit être suffisamment intelligent pour ne proposer que la durée de réservation possible (exemple : si il y a une réservation prévue pour dans 19 minutes, qu'une réservation doit faire au minimum 10 minutes, et qu'elle doit être un multiple de 5, ne proposer que 10 et 15 minutes)
  - l'utilisation de l'interface peut avoir lieu quelques minutes après son chargement (le temps restant peut évoluer).
- La possibilité, si nous sommes l'auteur de la réservation, de l'annuler

# Contraintes

- Votre livrable devra être rendu sous la forme d'un repository public, GitHub de préférence
  - Soignez vos noms de commits
  - Organisez vous comme vous le souhaitez pour le développement (PR, Git Flow...)
- Vous devez utiliser React
- Vous devez utiliser une librairie de CSS-in-JS (styled-components, emotion...) - pas de CSS global
- Vous devez utiliser l'API dont vous trouverez la documentation ci-dessous
- Le design doit être au minimum soigné. Carte blanche à ce niveau là

# Conseils

- Nous vous conseillons d'utiliser `create-react-app` pour bootstrapper votre projet
- Le suivi des best practices est encouragé
  - Functional components / React Hooks plutôt que des Class components
  - Typez vos props via TypeScript (préféré) ou PropTypes
- Utilisez une librairie de gestion d'état (Redux, Mobx...)
- Si vous avez des questions, des recommandations, n'hésitez pas à nous contacter (dans la mesure du raisonnable et de l'autonomie 😉)

# Etapes

**Niveau 1**

- Faire un MVP fonctionnel du projet en suivant les contraintes

**Niveau 2**

- L'application doit être responsive et fonctionner pour des résolutions allant jusqu'à `320 x 568` (limite basse, équivalent iPhone 5/SE)
- L'application doit être accessible (`aria-` tags, balises sémantiques)

**Niveau 3**

- Gérer les erreurs potentielles (réseaux, jetons expirés)
- Mettre en place des tests unitaires
- Mettre en place du CI pour tester lint / test unitaires / build à chaque push

---

# SharingCloud - Front technical test API

The API exposes a few endpoints allowing you to implement an application without having to deal with developing the backend.

The API is quite simple:

- There's a `/login` endpoint allowing you to get an auth token that you'll reuse in subsequent requests
  To simplify, you won't need to actually authenticate (with a username / password or anything), you'll just be considered as being the _Tony STARK_ user.
- You can access the information about the unique bookable resource with the `/resource` endpoint
- You can access the current bookings for that resource with the `/bookings` endpoint, returning only today's bookings.
- There are also endpoints to create and cancel a booking.

That's it.

## Run the API server

This is a Node.js project.
To run it, you need to install the dependencies with `npm install` (or `yarn`).

Duplicate the [./.env.example](.env) file and name it `.env`.

To run the project, run `npm start` (or `yarn start`). This command will create the SQLite database in the `.dev-data` directory, and load the `.env` file that you must have created.

## API specification

_Note: There's a [./usage.http](./usage.http) file you can use with the [VS Code REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) that will help you to experiment with the API._

**Base URL:** http://localhost:4000

The API accepts and sends only `application/json` bodies.

You must send a `Authorization: Bearer <auth_token>` header to all endpoints requiring authentication.

### Common HTTP status codes / responses

Any successful (`2xx`) request will be of the following form, `null` being actual data:

```json
{
  "success": true,
  "data": null
}
```

Any failed (`4xx` or `5xx`) request will be of the following form:

```json
{
  "success": false,
  "message": "The error message"
}
```

Only these status codes will be sent:

- `200 OK`: The request was successful
- `400 Bad Request`: The request was malformed (invalid content type, malformed body)
- `404 Not Found`: The endpoint or the resource does not exist
- `401 Unauthorized`: There's no auth token given, or the auth token is invalid
- `403 Forbidden`: You're not allowed to do this (cancel booking of another user for example)
- `409 Conflict`: The booking you're trying to create overlaps another booking, or you try to cancel an already cancelled booking
- `500 Internal Server Error`: There was an internal server error

In any error case, the `message` field will be very informative.

### Endpoints

#### `GET /reset`

This is a special endpoint. Some random bookings will be created everyday. With this endpoint, your environment will be destroyed and recreated, creating new random bookings.

Use this for example if you don't want to wait 30 minutes because of an ongoing booking.

**Sample response**

```json
{
  "success": true,
  "data": null
}
```

#### `GET /login`

This endpoint returns a token and its expiration date.
You don't need to give any password, you'll just be considered as _Tony STARK_.

**Sample response**

```json
{
  "success": true,
  "data": {
    "token": "rdCEbA6ENme4X17kxk7av",
    "expirationDate": "2019-10-31T15:34:55.599Z"
  }
}
```

#### `GET /logout`

**Require authentication**

This endpoint revokes the currently used auth token, effectively logging out the user.

**Sample response**

```json
{
  "success": true,
  "data": null
}
```

#### `GET /users/<id>`

**Require authentication**

This endpoint returns information about the specified user.

**Sample response**

```json
{
  "success": true,
  "data": {
    "id": "W0LefXAjaNQhKtpf_yjoO",
    "name": "Clark KENT"
  }
}
```

#### `GET /me`

**Require authentication**

This endpoint returns information about you.

**Sample response**

```json
{
  "success": true,
  "data": {
    "id": "FBoFh0twT5sMLzWc0KMSE",
    "name": "Tony STARK"
  }
}
```

#### `GET /resource`

**Require authentication**

This endpoint returns information about the unique resource.

**Sample response**

```json
{
  "success": true,
  "data": {
    "id": "VDSmMqHwjkGT2EMFQJ-iw",
    "name": "Open-space",
    "minimumBookingDuration": 10,
    "maximumBookingDuration": 90,
    "bookingDurationStep": 5
  }
}
```

#### `GET /bookings`

**Require authentication**

This endpoint returns today's bookings.

**Sample response**

```json
{
  "success": true,
  "data": [
    {
      "id": "FUCN3hdPslM81xW-sJDmO",
      "start": "2019-10-31T06:28:48.593Z",
      "end": "2019-10-31T06:48:48.593Z",
      "name": "Diffusion DC Comics",
      "userId": "y8Lc5mzU4KkXIh_bmtfcX"
    },
    {
      "id": "0hsjRVDnnyxoU2hBOGSaZ",
      "start": "2019-10-31T08:11:12.752Z",
      "end": "2019-10-31T08:21:12.752Z",
      "name": "Pot de départ",
      "userId": "fRbY66_5Y7zkPdrjRGzyL"
    },
    {
      "id": "B0zH0gOkI20VTJQJ4ppeE",
      "start": "2019-10-31T12:36:00.699Z",
      "end": "2019-10-31T12:56:00.699Z",
      "name": "Anniversaire",
      "userId": "W0LefXAjaNQhKtpf_yjoO"
    }
  ]
}
```

#### `POST /bookings`

**Require authentication**

This endpoint creates a booking.

**Sample request**

```json
{
  "name": "Daily",
  "duration": 20
}
```

- `name` must be between 3 and 500 characters long
- `duration`, in minutes, must be at least resource `minimumBookingDuration`, at most `maximumBookingDuration`, and a multiple of `bookingDurationStep`

**Sample response**

```json
{
  "success": true,
  "data": {
    "bookingId": "4mbPKbMtBtbZjVy3ZBLxy"
  }
}
```

#### `DELETE /bookings/<id>`

**Require authentication**

This endpoint cancels a booking.

**Sample response**

```json
{
  "success": true,
  "data": null
}
```
