# Cas concret

Antoine, Maxime, Damien, Olivier

## Description du projet

Amélioration du site Lord Of The Ring en version [1.0.0](https://github.com/Azroph/Cours-Versioning-Projet-1/releases/tag/1.0.0) pour rajouter les fonctionnalités suivantes :

- Création d’une page Contacs
- Création d’une page A propos
- Création d’une page Mentions légales
- Animation page principale
- Création d’un README

## Récupération du projet

```bash
git clone git@github.com:Azroph/Cours-Versioning-Projet-1.git
cd Cours-Versioning-Projet-1
```

## Workflow

|  | Maxime | Damien | Olivier | Antoine |
| --- | --- | --- | --- | --- |
| tache | Animation de la page principale | Création page contact | Mentions légales + readme | Page à propos |
| branche | indexJS | PageContact | mentions | about |

## Travail sur branche ‘dev’

- Antoine : création branche ‘dev’
- Antoine : push branche ‘dev’ sur repo
- Tous : récupération branche ‘dev’ depuis repo
- Damien : création dossier ‘pages’ sur branche ‘dev’
- Damien : push branche ‘dev’ sur origin
- tous : Pull branche ‘dev’

## Versions planifiées

- [1.1.0](https://github.com/Azroph/Cours-Versioning-Projet-1/releases/tag/1.1.0)
    - Vidéo sur header index.html
- 1.2.x
    - feature : on/off sur son vidéo
    - Page Mentions légales opérationnelle
    - Lien vers page mentions légales
- 1.3.x
    - Page contact opérationnelle
    - Page à propos opérationnelle
    - Liens vers pages contact et à propos
- 1.4.x
    - feature : Animation des textes section aventure

## Actions à réaliser par chacun

- Avant de travailler dans sa branche, réaliser :

```bash
git pull origin dev # depuis sa branche de travail
```

- Push de temps en temps sur le repo :

```bash
git push origin ma-branche
```

##