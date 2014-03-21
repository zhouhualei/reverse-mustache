var mustache = require('mustache');
var template = 'hello {{#world}}moon{{/world}}';

console.log(mustache.parse(template));
console.log(mustache.render(template, {world: true}));

// TODO: We should still probably draw out an automata diagram
// But... let's re-invent regular expressions with booleans

// Works well in prolog. I am sure there is a better way to do it.
// ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'] = ['h', 'e', 'l', 'l', 'o', X1, X2, X3, X4, X5]
