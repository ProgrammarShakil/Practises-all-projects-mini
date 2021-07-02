 function doMath() {

     let time = new Date().getHours(); //23


     if (time >= 6 && time < 12) {

         //greater and similliar than 6am and smaller than 12pm.

         alert("Hi! Good Morning shakil.");


     } else if (time >= 12 && time < 18) {

         //greater and similliar than 12 and smaller than 18pm.

         alert("Hi! Good Afternoon shakil.");


     } else {
         alert("Hi! Good Evening shakil.");
     }

 }

 doMath();
