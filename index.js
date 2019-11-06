var dayOfTheWeek = prompt('Please enter the day of the week', 'Monday');
if (dayOfTheWeek != null) { 
  dayOfTheWeek = dayOfTheWeek.toUpperCase();
}

switch (dayOfTheWeek) {
    case 'MONDAY':
        alert('Working Day');
        break;
    case 'TUESDAY':
        alert('Working Day');
        break;
    case 'WENDESDAY':
        alert('Working Day');
        break;
    case 'THURSDAY':
        alert('Working Day');
        break;
    case 'FRIDAY':
        alert('Working Day');
        break;
    case 'SATURDAY':
        alert('Weekend');
        break;
    case 'SUNDAY':
        alert('Weekend');
        break;

    default:
        alert('Can not define, please try another value');
        break;
}



var dayOfTheWeek = prompt('Please enter the day of the week', 'Monday');
if (dayOfTheWeek != null) {
  // it's to be UPPERCASE 
  dayOfTheWeek = dayOfTheWeek.toUpperCase();
}
if (dayOfTheWeek === 'MONDAY' || dayOfTheWeek === 'TUESDAY' || dayOfTheWeek === 'WENDSEDAY' || dayOfTheWeek === 'THURSDAY' 
|| dayOfTheWeek=== 'FRIDAY') {
  console.log(alert('Working day'));
} else if (dayOfTheWeek === 'SUTERDAY' || dayOfTheWeek === 'SUNDAY') {
    console.log(alert('Weekend'));
} else {
    console.log(alert('Can not define, please try another value'));
}
   






