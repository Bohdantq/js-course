function checkNumber(){
   let num = prompt("Enter a number");
   num = Number(num);
   
   if(isNaN(num)){
      alert("That's not a valid number");
   }
   else if(num % 2 === 0){
      alert("even number");
   }
   else{
      alert("odd number");
   }
}

checkNumber()