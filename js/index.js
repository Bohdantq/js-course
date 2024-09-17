function isLeapYear(year) {
   if (year % 4 === 0) {
      if (year % 100 === 0) {
         if (year % 400 === 0) {
            return true;
         }
         return false;
      }
      return true;
   }
   return false;
}

let year = prompt("Enter a year");
year = Number(year);

if (isNaN(year)) {
   alert("That's not a valid number");
}
else {
   if (isLeapYear(year)) {
      alert(year + " is a leap year.");
   }
   else {
      alert(year + " is not a leap year.")
   }
}