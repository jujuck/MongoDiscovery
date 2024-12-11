## Premiers pas :

- Clone le repo (URL)
- Fait le tour du propriétaire et des différentes parties (Explore Docker-Compose)
- Rempli les fichiers d'environnement si besoin

Durant cette quête, n'hésites pas à creuser le sujet via la documentation officielle de Mongoose (https://mongoosejs.com/docs/queries.html)

## Exercices pratiques (Sur la base du schéma Wilder):

- Créer une collection "techs" avec des propriétés suivantes (nom, description, level, linkedProjects [{ date, description}]) dans un fichier spécifique.

```js
const .... = new Schema({
  nom: String,
  ...
});

```

- Mets en place un controller avec une route POST et récupère les informations nécessaires dans le body.
  Pour créer une nouvelle tech, nous allons premièrement générer une nouvelle instance de Tech avec les informations reçues puis la sauver.

```js
const tech = new Tech(req.body) //*1
const result = await tech.save() // *2
res....
```

:bulb: **_1_** : Ici, nous créons une instance `Tech` (à partir de la classe POO Tech). cette instance est un modèle Mongoose, une abstraction de document MongoDB enriches de fonctionnalités (validation, middleware, ...). Le passage du paramètre `req.body` qpermet de remplir automatiquement les champs du document.

:bulb: **_2_** : Comment dans TypeOrm, la méthode `save` permet d'enregistrer le nouveau document directement dans la BDD MongoDB. La variable `result` contient le champ \_id du document généré par MongoDB.

- Affiche toutes tes tech
  Créer un route get qui retournera à partir du TechModel, tous les éléments de la collection

```js
const techs = await TechModel.find();
res.status(200)....
```

- Modifier le prix d’un produit spécifique.
  Créer une route put qui récupere en params, l'id du document à modifier et en body les infos à modifier. Comme dans typeORM, commence par récupèrer dans ta collection le document, puis mets à jour les propriétés voulues. Enfin, sauve.

```js
const myTech = await TechModel.findOne({...}) // * 3
myTech[my Key] = req.body...
...
myTech.save()
res.status(201)
```

:bulb: **_3_** : La méthode `findOne` de Mongoose permet de rechercher le premier document ayant le critère demandé. On peut ainsi affiner facilement nos recherches. D'autres méthodes sont possibles telles que `findOneByID` ou `find()` associé à une propriété where.

- Supprimer un produit d'une certaine catégorie.
  A toi de jouer, lis la doc (https://mongoosejs.com/docs/queries.html)

  Si tu as un doute, regarde une piste de solution sur la branche `correction`

### Conclusion

Tu as découvert rapidement l'univers de MongoDB. Nous avons appris à créer une collection via le schéma et les principales queries du CRUD. Tu peux remarquer que la syntaxe et la logique ne sont pas très éloignés de ce que nous propose TypeORM...
Allez, ne perdons pas de temps et passons à la suite: REDIS
