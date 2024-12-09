
### Objectifs :

- Clone le repo (URL)
- Fait le tour du propriétaire et des différentes parties (Explore Docker-Compose)
- Rempli les fichiers d'environnement si besoin

Durant cette quête, n'hésites pas à creuser le sujet via la documentation officielle de Mongoose (https://mongoosejs.com/docs/queries.html)

### Exercices pratiques (Sur la base du schéma Wilder):

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
const tech = new Tech(req.body)
const result = await tech.save()
res....
```

- Affiche toutes tes tech
  Créer un route get qui retournera à partir du TechModel, tous les éléments de la collection

```js
const techs = await TechModel.find();
res.status(200)....
```

- Modifier le prix d’un produit spécifique.
  Créer une route put qui récupere en params, l'id du document à modifier et en body les infos à modifier. Comme dans typeORM, commence par récupèrer dans ta collection le document, puis mets à jour les propriétés voulues. Enfin, sauve.

```js
const myTech = await TechModel.findOne({...})
myTech[my Key] = req.body...
...
myTech.save()
res.status(201)
```

- Supprimer un produit d'une certaine catégorie.
  A toi de jouer, lis la doc

  Si tu as un doute, regarde une piste de solution sur la branche `correction`
