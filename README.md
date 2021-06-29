## easy-express v1

Installation

```
npm i easy-express
```

Utilisation

```js
// Importer le module
const express = require('easy-express')

// Créer le site
const App = new express.Application()

// Connecter le site
App.run() // Arguments : port, action (optionnel). Par défaut port = 3000 et action = console.log('App ready !')
```

Exemple 

```js

const express = require('easy-express')
const App = new express.Application()

// Création d'une page avec le lien votresite.com/ qui retournera Salut
App.newPage('/', 'Salut')

// Création d'une page avec le lien votresite.com/html qui retournera le contenu de votre fichier index.html en HTML
App.newHtmlPage('/html', 'index.html')

// En phase bêta.
App.newJsonPage('/json', '{ "test": "salut" }')

App.run()
```

*Une création &copy; Bladebolt Team - Copyrights - 2020/2021*
