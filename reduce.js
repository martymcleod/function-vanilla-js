
/**
 * Le reducer est la fonction passée en parametre de la fonction reduce()
 * ce reducer prends 2 parametres
 *  params 1 => accumulateur
 *  params 2 => la valeur actuel du tableau
 * 
 */
let array = [1, 2, 3]

const reducer = (acc, curr ) =>  acc + curr

console.log(array.reduce(reducer))

/**
 * Ici le 5 (2eme parametre de la fonction reduce() )
 * se place dans l'accumulateur (1er parametre du reducer)
 */
console.log(array.reduce(reducer, 5))


