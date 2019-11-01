const R = require('ramda');

const SPLIT_SYMBOLS = new RegExp(/[/\-_ ]/gi);

const getSlug = R.pipe(
  R.toLower,
  // First, we remove diacritics, maintaining the char
  str => str.normalize('NFD'),
  R.replace(/[\u0300-\u036f]/g, ''),
  // Then, we split from common symbols (spaces, etc)
  R.split(SPLIT_SYMBOLS),
  // We join them the results
  R.join('-'),
  // And finally, we replace every non alphanumerical or dash char
  R.replace(/[^a-zA-Z\d-]+/g, ''),
);

const src = "This is gonna be really funny. Isn't it?";

console.log(getSlug(src));
