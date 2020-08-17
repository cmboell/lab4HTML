'use strict';

console.log('This file is connected and ready to run');

//   new is a keyword      object that has properties, the date.
var today = new             Date();
//var is a keyword that makes
// the word today a variable
//allow to take the today variable and output to page.
var userName = prompt('Please enter your first name');

alert('Hello, ' + userName + ' click OK to proceed.');



var now = new Date();
var hourNow = now.getHours();


//variable declaration for the greeting.
var greeting;

if(hourNow >= 18 && hourNow <= 24){
    greeting = 'Good Evening, ' + userName;
} else if (hourNow > 12){
    greeting = 'Good Afternoon, ' + userName;
} else if (hourNow >= 7){
    greeting = 'Good Mid Day, ' + userName;
} else if (hourNow >= 0 ){
    greeting = 'Good Morning, ' + userName;
} else {
    greeting = 'Something went wrong!';
}



document.getElementById('greeting-placeholder').textContent = greeting;


var header = document.getElementById('removeThis');
header.remove();


var howMany = function() {
    var count = prompt('How Many slices?');
  
    while( count === '' || isNaN(count) ) {
      count = prompt('Please enter a number How many do you want?');
    }

    console.log(typeof number);
    console.log('HowMany():', Number(count));
    return Number(count);
  }
  
  var getItem = function() {
    var order = prompt('What would you like to order?').toLowerCase;
    var item;
  
    while (order !== 'pepperoni' && order !== 'cheese') {
      order = prompt('Please enter "pepperoni" or "cheese"...');
    }
  
    if (order === 'pepperoni') {
      item = '<img src="images/pan-pizza-hut.jpg">';
    } else if (order === 'cheese') {
      item = '<img src="images/pic-food-20.jpg">';
    }
  console.log('getItem():', item);
    document.write(item);
    return item;
  }
  
  var showOrder = function() {
   
  
    for(var i = 0; i < total; i++) {
      result = result + '<p>Model #' + i + ' ' + item + '</p>';
    }
    console.log('showOrder():', result)
    return result;
  }

  howMany();
  getItem();
  showOrder();