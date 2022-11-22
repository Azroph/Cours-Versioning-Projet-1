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

## Version web du projet

https://azroph.github.io/Cours-Versioning-Projet-1/

## Workflow

|         | Maxime                          | Damien                | Olivier                   | Antoine       |
| ------- | ------------------------------- | --------------------- | ------------------------- | ------------- |
| tache   | Animation de la page principale | Création page contact | Mentions légales + readme | Page à propos |
| branche | indexJS                         | contact               | mentions                  | about         |

## Travail sur branche ‘dev’

### Initialisation de la branche dev

- Antoine : création branche ‘dev’
- Antoine : push branche ‘dev’ sur repo
- Tous : récupération branche ‘dev’ depuis repo
- Damien : création dossier ‘pages’ sur branche ‘dev’
- Damien : push branche ‘dev’ sur origin
- Tous : Pull branche ‘dev’

Pour chaque étapes du projet, des branches distinctes ont été créées (indexJS, contact, mentions, about, ...)
Pour chaque nouvelle release, les branches concernées sont ‘merge’ sur la branche ‘dev’ via pull requests.
Etant donné que des pages sont créées, il a été nécessaire de mettre à jour les liens sur toutes les pages.
Cette action est réalisée sur la branche ‘dev’ puis un merge est réalisé vers la branche ‘main’ via pull request.

A chaque ‘merge’ vers la branche ‘main’, un tag est appliqué pour définir la nouvelle version. Ensuite, une release est créée sur Github.

## Versions planifiées

- [1.1.0](https://github.com/Azroph/Cours-Versioning-Projet-1/releases/tag/1.1.0)
  - Vidéo sur header index.html
- [1.2.0](https://github.com/Azroph/Cours-Versioning-Projet-1/releases/tag/1.2.0)
  - feature : on/off sur son vidéo
  - Page Mentions légales opérationnelle
  - Lien vers page mentions légales
- [1.3.0](https://github.com/Azroph/Cours-Versioning-Projet-1/releases/tag/1.3.0)
  - Page contact opérationnelle
  - Page à propos opérationnelle
  - Liens vers pages contact et à propos
- [1.3.1](https://github.com/Azroph/Cours-Versioning-Projet-1/releases/tag/1.3.1)
  - Amélioration de la page à propos
- [1.4.0](https://github.com/Azroph/Cours-Versioning-Projet-1/releases/tag/1.4.0)
  - feature : Animation des textes section aventure page d'accueil

## Actions à réaliser par chacun

- Avant de travailler dans sa branche, réaliser :

```bash
git checkout _ma-branche_
git pull
```

- Push de temps en temps sur le repo :

```bash
git push origin ma-branche
```

##
