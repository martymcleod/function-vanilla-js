/**
 * filter : creer et retourne un tableau contenant tous les elements du tableau 
 * d'origine qui remplissent une condition détérminée par une fonction de callback
 */

const words = ['bon', 'toujours', 'independants', 'verifier', 'toto']

const result = words.filter( word => word.length > 6)

console.log(result)