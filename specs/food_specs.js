var Food = require('../food_constructor' );
var assert = require( 'chai' ).assert;

describe('Food', function(){
  food1 = new Food( 'Liver Bread', 30 );

  it('Check food is created', function(){
    assert.equal( 'Liver Bread', food1.name );
  })

  it('Check that poison status is initialized = false', function(){
    assert.equal( 0, food1.poisoned );
  })

})
