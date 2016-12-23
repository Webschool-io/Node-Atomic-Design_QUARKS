(() => {
  "use strict";
const isArray = require('./isArray/isArray');
const isBissexto = require('./isBissexto/isBissexto');
const isBoolean = require('./isBoolean/isBoolean');
const isCep = require('./isCep/isCep');
const isCnpj = require('./isCnpj/isCnpj');
const isDate = require('./isDate/isDate');
const isEmail = require('./isEmail/isEmail');
const isEmpty = require('./isEmpty/isEmpty');
const isEnum = require('./isEnum/isEnum');
const isInArray = require('./isInArray/isInArray');
const isInObject = require('./isInObject/isInObject');
const isInProfileFields = require('./isInProfileFields/isInProfileFields');
const isISBN13 = require('./isISBN-13/isISBN-13');
const isName = require('./isName/isName');
const isObject = require('./isObject/isObject');
const isString = require('./isString/isString');
const toCapitalize = require('./toCapitalize/toCapitalize');
const toLowerCase = require('./toLowerCase/toLowerCase');
const toUpperCase = require('./toUpperCase/toUpperCase');

  module.exports = {
      isArray
    , isBissexto
    , isBoolean
    , isCep
    , isCnpj
    , isDate
    , isEmail
    , isEmpty
    , isEnum
    , isInArray
    , isInObject
    , isInProfileFields
    , isISBN13
    , isName
    , isObject
    , isString
    , toCapitalize
    , toLowerCase
    , toUpperCase
  }

})();
