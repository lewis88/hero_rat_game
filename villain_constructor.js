var Rat = require('../rat_constructor');

// The Villain will gain a rat in his ratArray every two turns
// Villain can throw a rat, attackRat, which does flat health damage
// Villain can also poison the hero's food which does damage if eaten.

var Villain = function( name,  ){
  this.name = name;
  this.health = 200;
  this.ratArray = [];
}

// Math.floor((Math.random() * 10) return a random number between 1 and 10

Villain.prototype = {
  addRat: function( name, dirtiness ){
    var newRat = new Rat( name, dirtiness );
    this.ratArray.push( newRat );
  }

  // randomRat: selects a random rat from the ratArray
  randomRat: function(){
    var index = Math.floor( (Math.random() * ( this.ratArray.length - 1 ) ) );
    return this.ratArray.splice(index, 1)[0]; // this returns the Rat Hash
  }

  // attackRat: takes flat health off of Hero
  attackRat: function( hero ){
    var thisRat = randomRat();
    hero.health += thisRat.dirtiness;
  }
  // poisonRat: poisons the hero's food
  poisonRat: function( hero ){
    var thisRat = randomRat();
    var index = Math.floor( (Math.random() * ( hero.heroFoodArray.length - 1) ) );
    if (hero.heroFoodArray[index] === 0){
      hero.heroFoodArray[index] = thisRat[1] // poisons the selected food item
      hero.heroFoodArray[index] = 1
    }
  }
}
