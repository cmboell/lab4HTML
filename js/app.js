//'use strict'
//console.log('add second output page')
// new is a keyword  object that has properties, the date.
//var today = new Date();
// var is a keyword that makes
// the word today a variable

// allow to take the today variable and output to page
//document.write(today);




var howMany = function() {
    var count = prompt('How Many slices?');
  
    while( count === '' || isNaN(count) ) {
      count = prompt('Please enter a number. How many do you want?');
    }
  
    return Number(count);
  }
  
  var getItem = function() {
    var order = prompt('What would you like to order?').toLowerCase;
    var item;
  
    while (order !== 'pepperoni' && order !== 'sausage') {
      order = prompt('Please enter "pepperoni" or "sausage"...');
    }
  
    if (order === 'pepperoni') {
      item = '<img src="images/hotel.png">';
    } else if (order === 'sausage') {
      item = '<img src="images/house.png">';
    }
  
    return item;
  }
  
  var showOrder = function() {
    var item = getItem();
    var total = howMany();
    var result = '';
  
    for(var i = 0; i < total; i++) {
      result = result + '<p>Model #' + i + ' ' + item + '</p>';
    }
  
    return result;
  }

  howMany();
  getItem();
  showOrder();