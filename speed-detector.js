             //Speed Detector
// If the speed is less than 70, it prints “Ok”. 
//Otherwise, for every 5 km/s above the speed limit (70), it give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it print: “Points: 2”. 
//    >If the driver gets more than 12 points, the function print: “License suspended”.

function checkSpeed (speed){
    let demeritPoints = 0
    
   const warning = "Licence Suspended"
    if (speed<= 70){
      console.log ("OK")              //For speed elow 70 the program prints 'OK'
    }
    else {
     
      demeritPoints = Math.floor((speed-70)/5)   //Calculating the demerit points.
  
      if (demeritPoints > 12){         ///function to print a warning 'Licence suspended' for demerit points above 12
        console.log (warning)
        console.log (demeritPoints)
      }
      else {
        console.log (demeritPoints)
      }
    }
  }
  
   console.log(checkSpeed())