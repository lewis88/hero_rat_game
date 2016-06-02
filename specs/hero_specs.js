var Hero = require('../hero_constructor' );
var Food = require('../food_constructor' );
var Rat = require('../rat_constructor');
var assert = require( 'chai' ).assert;

describe('Hero', function(){
  // beforeEach(function(){
  //   basket.empty();
  // })
  hero1 = new Hero( 'Super Jeff', 100, 'Liver Bread' );
  food1 = new Food( 'Liver Bread', 30 );
  food2 = new Food( 'Leek Soup', 20 );
  rat1 = new Rat( 'Roland', -50);

  it('Hero is created', function(){
    assert.equal( 'Super Jeff', hero1.name );
  })

  it('Hero can state his name', function(){
    assert.equal( 'I am Super Jeff!!!', hero1.talk() )
  })

  it('Hero gains nourishment from food, 1.5 X from favourite food', function(){
    hero1.eat( food1 );
    assert.equal( 145, hero1.health );
  })

  it('Hero gains nourishment from food, 1.0 X from favourite food', function(){
    hero1.health = 100;
    hero1.eat( food2 );
    assert.equal( 120, hero1.health );
  })

  it('Rat poisons food and Hero loses health when eats', function(){
    hero1.health = 100;
    rat1.touch( food2 );
    hero1.eat( food2 );
    assert.equal( 50, hero1.health );
  })

})
