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

const getActualSleepHours = () => {
	
}























