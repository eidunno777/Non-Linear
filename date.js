
var x;
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1; //January is 0!
var year = today.getFullYear()
var count;
/*
Determines if a year is a leap year and returns a value of 1 if it is a leap year or 0 if otherwise
*/
function leap (year, num)
{
	if((year % 4) == 0)
	{
		num = 1;
	}
	else{
		num = 0;
	}
	if((year % 100 == 0) && ((year % 400)) == 0){
		num = 1;
	}
	return num;
}
/*
Determine day count
*/

function mon_cnt (month)
{
	if (month == 1)
	{
		count = 0;
	}
	else if (month == 2){
		count = 31;
	}
	else if (month == 3){
		count = 59;
	}
	else if (month == 4){
		count = 90;
	}
	else if (month == 5){
		count = 120;
	}
	else if (month == 6){
		count = 151;
	}
	else if (month == 7){
		count =181;
	}
	else if (month == 8){
		count = 212;
	}
	else if (month == 9){
		count = 243;
	}
	else if (month == 10){
		count = 273;
	}
	else if (month == 11){
		count = 304;
	}
	else if (month == 12){
		count = 334;
	}

	return count;
}
/*Determine day count of the year*/
function day_count()
{
	x = count + num + day;
	return x;
}

num = leap(year, num);
count = mon_cnt(month);
var dayCount = day_count();
console.log(dayCount);
