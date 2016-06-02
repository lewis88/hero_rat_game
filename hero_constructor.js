
var Hero = function( name, health, attack, favFood, foodArray ){
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.favFood = favFood;
  this.foodArray = foodArray;
  this.heroFoodArray = []
  // The foodArray is the selection of food objects passed at initialize
  // The heroFoodArray is the the randomized selection of food objects from foodArray
}

Hero.prototype = {

  talk: function(){
    var result = 'I am ' + this.name + '!!!';
    console.log( result );
    return result
  },

  // addFood: adds food to the players array
  addFood: function(){
    var index = Math.floor( ( Math.random() * (this.foodArray.length - 1) ) );
    this.herofoodArray += this.foodArray[ index ]; // this returns food object
  },

  // eat: hero eats gaining health, if food is clean, losing health, if poisoned
  eat: function(){
    var index = Math.floor( ( Math.random() * (this.heroFoodArray.length - 1) ) );
    var munch = this.ratArray.splice(index, 1)[0];
    if( munch.name === this.favFood && munch.nourish > 0 ){
      this.health += (munch.nourish * 1.5);
    } else {
      this.health += munch.nourish;
    }
  }

  // attackVillain: function( villain ){
  //
  // }
}


module.exports = Hero;
