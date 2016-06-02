var Food = function( name, nourish, poisoned ){
  this.name = name;
  this.nourish = nourish;
  this.poisoned = 0; // food is initially 0, clean, 1 if poisoned
}

module.exports = Food;
