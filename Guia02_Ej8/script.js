let array = [];

do {
   
   var num = parseInt(prompt("Ingrese un número distinto de 0:"))
   array.push(num);
   if (num == 0) {
      break;
   }
} while (num != 0);
      
   
    

   for (let i = 0; i < array.length; i++) {
      alert(array[i]);
      
   }
   




