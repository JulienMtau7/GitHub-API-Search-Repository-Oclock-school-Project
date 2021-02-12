# Variante pour le lancement de la requête API en utilisant un effet

```js

// utilisé pour le champ controllé de recherche
const [search, setSearch] useState('');

// utilisé comme chaine pour la requete à faire sur l'api
const [query, setQuery] useState(null);

// gestionnaire d'évènement de soumission du formulaire
handleSubmit = () => {
    setQuery(search);
};

// on utilise le hook d'effet pour lancer la recherche.
// on provoque un nouvel api seulement si la variable d'état query
// a changé et qu'elle n'est pas nulle (rendu initial)
useEffect(() => {}
    if (query !== null){
        //on appelle l'API
        axios.blabla...
    }
,
[query]
);

```
