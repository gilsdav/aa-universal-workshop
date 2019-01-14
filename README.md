# AAUniversalWorkshop (Angular Advanced Universal Workshop)

*Based on https://github.com/toddmotto/ac-boilerplate*

![Zozor](https://camo.githubusercontent.com/81f72f2fdf98aa1d30b5b215bc8ca9420b249e81/68747470733a2f2f616e67756c61722e696f2f67656e6572617465642f696d616765732f6d61726b6574696e672f636f6e636570742d69636f6e732f756e6976657273616c2e706e67)

## Development server

Exécutez la commande `npm start` pour démarrer les serveurs.
Naviguez sur http://localhost:4200/. L'application va automatiquement se recharger quand vous ferez des changements dans le code.

L'API Rest est disponible à l'adresse `http://localhost:3000/`

## Mise en pratique

### 1. Ajouter le support Universal au projet ###
* Utiliser le CLI `ng add @nguniversal/express-engine --clientProject aa-universal-workshop`
* Lancer l'application `npm run build:ssr && npm run serve:ssr`

### 2. Ajouter un transfer state ###
* Dans `pizzas.service.ts`
* Ajouter un "tranfer state" dans la méthode `getPizzas`
* Consignes:
    * Attention, le transfer state ne doit pas service de cache

### 3. Améliorer le SEO ###
* Dans un nouveau fichier `metadata.service.ts`
* Ajouter un titre, une description ainsi que les meta suivantes:
    * *description*
    * *twitter:card*
    * *twitter:site*
    * *twitter:title*
    * *twitter:description*
    * *twitter:text:description*
    * *twitter:image*
    * *og:image*
    * *og:title*
    * *og:site_name*
* Consignes:
    * Appliquer des valeurs différentes sur la page product et sur la page productItem
    * Intégrer des données de la pizza comme le nom ou les ingrédients pour les meta de la page productItem


![Zozor](https://www.letscode.hu/img/letscodelogo190.png)
