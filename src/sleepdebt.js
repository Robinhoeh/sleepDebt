/*

The first problem to solve is asking the user how many hours of sleep they got each night of the week.

You can declare a function that returns any given night's number of hours of rest. 
Instead of writing seven different functions (one for each day of the week), let's write one function with a 
parameter for the day.

Declare a function named getSleepHours() with a parameter named day.

*/


/*



Inside the getSleepHours() function, use either an if/else statement or a switch
statement to return the number of actual sleep hours for each night.

For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.

The function should be able to match any one of the seven days and return a number for each.



*/ 

const getSleepHours = (day) => {
	if (day === 'monday'){
		let mondayHours = parseInt( prompt("How many hours sleep do you get on Mondays?") );
		if( isNaN(mondayHours) ) {
		alert("Hey, thats not a number silly!");
	}
	return  mondayHours;
	
	} else if (day === 'tuesday') {
		let tuesdayHours = parseInt( prompt("How many hours sleep do you get on tuesday?") );
		if( isNaN(tuesdayHours) ) {
		alert("Hey, thats not a number still dude!");
	}
		return tuesdayHours;

	} else if (day === 'wednesday') {
		let wednesdayHours = parseInt( prompt("How many hours sleep do you get on wednesday?") );
		if( isNaN(wednesdayHours) ) {
		alert("Hey, come on!");
	}
		return wednesdayHours;

	} else if (day === 'thursday') {
		let thursdayHours = parseInt( prompt("How many hours sleep do you get on thursday?") );
		if( isNaN(thursdayHours) ) {
		alert("WOW PUT IN A NUMBER!");
	}
		return thursdayHours;

	} else if (day === 'friday') {
		let fridayHours = parseInt( prompt("How many hours sleep do you get on friday?") );
		if( isNaN(fridayHours) ) {
		alert("is this Neil?!");
	}
		return fridayHours;

	} else if (day === 'saturday') {
		let saturdayHours = parseInt( prompt("How many hours sleep do you get on saturday?") );
		if( isNaN(saturdayHours) ) {
		alert("This is your second last chance to put in a number");
	}
		return saturdayHours;

	} else if (day === 'sunday') {
		let sundayHours = parseInt( prompt("How many hours sleep do you get on sunday?") );
		if( isNaN(sundayHours) ) {
		alert("Hey, thats not a number you weirdo. NOW U MADE ME MAD!");
	}
		return sundayHours;
	}
}

// console.log( getSleepHours('tuesday') );



/*

Now that you've written a function to get the sleep hours for each night, we need to do three things:

Get the total sleep hours that the user actually slept
Get the ideal sleep hours that the user prefers
Calculate the sleep debt, if any.
To get the total sleep hours that the user actually slept, declare a new function named getActualSleepHours() that takes no parameters.

*/

const getActualSleepHours = () => 
	getSleepHours('monday') +
	getSleepHours('tuesday') +
	getSleepHours('wednesday') +
	getSleepHours('thursday') +
	getSleepHours('friday') +
	getSleepHours('saturday') +
	getSleepHours('sunday');

//no brackets IMPLIES return  = implicit return

//Inside the getActualSleepHours() function, call the getSleepHours() function for 
//each day of the week. Add them all together and return the result using the arrow function syntax and implicit return.


const getIdealSleepHours = () => {

let idealSleepHours = prompt('How many hours a night would you like to sleep?');//
	if (isNaN(idealSleepHours) ) {
		alert('Number please?');
	}
	return idealSleepHours * 7;//number of days per week
}



//To get the ideal sleep hours that the user prefers, declare a function named getIdealSleepHours() with no parameters.
//Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. 
//Then return the idealHours multiplied by 7.
//You'll want to multiply by 7 to get the total hours you prefer per week.




const calculateSleepDebt = () => {
	const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours();

	if (actualSleepHours === idealSleepHours) {
		alert('Your desired amount of sleep and actual sleep are the same!');
	} else if (actualSleepHours > idealSleepHours) {
		alert(`You are actually getting ${actualSleepHours - idealSleepHours} more hours of sleep per week`);
	} else if (actualSleepHours < idealSleepHours) {
		alert(`You said you wanted ${idealSleepHours} hours per week. You are actually getting ${idealSleepHours - actualSleepHours} hours less of sleep per week...`);
	}
}

console.log( calculateSleepDebt() );



//Now that you can get the actual sleep hours and the ideal sleep hours, it's time to calculate sleep debt.

//Declare a function named calculateSleepDebt() with no parameters.

//Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.

//Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.





//Now that you have actualSleepHours and idealSleepHours, you can write a few if/else 
// statements to output the result to the user. The function should fulfill this logic:

// If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
// If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
// If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.



// To make this calculator more helpful, log the amount of hours the user is over or under their ideal 
// sleep in the calculateSleepDebt() function's output.













