Je comprends que vous souhaitez une version Markdown du contenu HTML, mais dans un format différent de ce que j'ai proposé précédemment. Je vais reformater le contenu en un seul fichier Markdown plus compact et lisible. Voici la nouvelle version :

```markdown
 # Vozona Gasy# Vozona Gasy

Vozona Gasy est une API simple et efficace qui permet de traduire du texte d'une langue source (de votre choix) vers le Malgache. Cette API utilise une combinaison d'outils modernes pour traiter les requêtes et retourner rapidement des traductions en texte brut.

## Fonctionnalités principales

- Traduction automatique de n'importe quelle langue en Malgache
- Gestion des requêtes HTTP POST pour soumettre le texte à traduire
- Retourne une réponse claire sous forme de texte décodé (sans entités HTML)
- Rapide et facile à utiliser

## Technologies utilisées

- Node.js : Plateforme pour exécuter JavaScript côté serveur
- Express : Framework web rapide et minimaliste pour créer l'API
- Axios : Librairie pour effectuer des requêtes HTTP vers le service de traduction
- html-entities : Librairie pour décoder les entités HTML

## Points d'entrée de l'API

### 1. GET /

- Description : Point d'entrée de test, affiche un simple message apropos
- Usage : Vérifier si le serveur est en ligne

### 2. POST /translate

- Description : Traduit un texte fourni dans une langue source vers le Malgache
- Requête :
  - Méthode : POST
  - Headers : `Content-Type: application/json`
  - Body (JSON) :
    ```json
    {
        "text": "Texte à traduire",
        "langue": "Langue source (ex : 'fr' pour français, 'en' pour anglais)"
    }

```

- Réponse (JSON) :

```json
 {{
    "translation": "Texte traduit en Malgache",
    "langue": "Langue source fournie"
}

```


- Codes de réponse :

- 200 OK : Traduction réussie
- 500 Internal Server Error : Une erreur est survenue lors de la traduction





## Exemple d'utilisation

### Requête

```javascript
    let xhr = new XMLHttpRequest();let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:1010/translate');
    xhr.setRequestHeader('Content-Type', 'application/json');
    let data = JSON.stringify({
        text: "Bonjour tout le monde",
        langue: "fr"
    });
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    };
    xhr.send(data);

```

### Réponse

```json
{
    "translation": "Miarahaba an'izao tontolo izao",
    "langue": "fr"
}

```

## Auteurs

Développé par **Justin** Lantomalala avec Node.js et passion pour la langue Malgache.
