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
	if (day === 'monday') {
		return  8;
	} else if (day === 'tuesday') {
		return 7;
	} else if (day === 'wednesday') {
		return 9;
	} else if (day === 'thursday') {
		return 4;
	} else if (day === 'friday') {
		return 10;
	} else if (day === 'saturday') {
		return 8;
	} else if (day === 'sunday') {
		return 6;
	}
}

console.log( getSleepHours('tuesday') );



/*

Now that you've written a function to get the sleep hours for each night, we need to do three things:

Get the total sleep hours that the user actually slept
Get the ideal sleep hours that the user prefers
Calculate the sleep debt, if any.
To get the total sleep hours that the user actually slept, declare a new function named getActualSleepHours() that takes no parameters.

*/

const getActualSleepHours = () => 
	getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +
	getSleepHours('thursday') +getSleepHours('friday') +getSleepHours('saturday') +
	getSleepHours('sunday');

//no brackets IMPLIES return  = implicit return

//Inside the getActualSleepHours() function, call the getSleepHours() function for 
//each day of the week. Add them all together and return the result using the arrow function syntax and implicit return.


const getIdealSleepHours = () => {

const IdealSleepHours = 8;//8 hours is reco by the doc
	return IdealSleepHours * 7;//number of days per week
}



//To get the ideal sleep hours that the user prefers, declare a function named getIdealSleepHours() with no parameters.
//Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. 
//Then return the idealHours multiplied by 7.
//You'll want to multiply by 7 to get the total hours you prefer per week.




const calculateSleepDebt = () => {
	const actualSleepHours = getActualSleepHours();
	const IdealSleepHours = getIdealSleepHours();

	if (actualSleepHours === idealSleepHours) {
		console.log('You have the perfect amount of sleep!');
	} else if (actualSleepHours > idealSleepHours) {
		console.log('You got too much sleep maybe');
	} else if (actualSleepHours < idealSleepHours) {
		console.log(`You said you wanted ${idealSleepHours} hours per week. You are actually getting 
			${idealSleepHours - actualSleepHours} hours of sleep per week!`);
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













