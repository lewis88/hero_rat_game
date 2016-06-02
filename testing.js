var VillainTest = function(){
  this.ratArray = [ {name: 'Rowland1', dirt: 10}, {name: 'Rowland2', dirt: 20}, {name: 'Rowland3', dirt: 30} ];
}

VillainTest.prototype = {
  // randomRat: selects a random rat from the ratArray
  randomRat: function(){
    var index = Math.floor((Math.random() * (this.ratArray.length - 1)));
    return this.ratArray.splice(index, 1)[0];
  }

}

villain1 = new VillainTest();
rat1 = villain1.randomRat();
rat2 = villain1.randomRat();
rat3 = villain1.randomRat();

console.log( rat1 );
console.log( rat2 );
console.log( rat3 );
