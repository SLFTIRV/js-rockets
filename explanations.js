
var favColor = 'blue';
var myFavColors = ['blue', 'red', 'poop'];
var numOfFavColors = 3
var hasGotFavColors = true;
var richObject = {
	firstName: 'Rich',
	lastName: 'Person',
	favColors: ['blue', 'red', 'poop'],
	yearsAlive: 9001,
	isMale: true
}

var fullname = function (firstname, secondname){
	return firstname + ' ' +secondname;
}

var area = function(width, height) {
	return width * height;
}

var whatIsMyFavColor = function () {
	return false;
	return true;
	return 'blue';
}

var doSomething = function () {
	console.log("do Something!!!");
}

var name1 = 'Rich';
var name2 = 'Bob';

if (name1 == 'Rich' || name2 == 'Bob') {
	alert('true 1 !');
} else if (name2 == 'Rich'){
	alert('true 2 !');
} else {
	alert('false!');
}
