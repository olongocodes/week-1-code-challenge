function payee(grossSalary,benefits ) {
    let netIncome = grossSalary + benefits
    
      
    
      if (grossSalary >= 0 && grossSalary <= 24000){
        netIncome = grossSalary + benefits - (150+((grossSalary*0.1)*2))
        
      }
      else if (grossSalary >= 24001 && grossSalary <= 32333){
        netIncome = grossSalary + benefits - (300+((grossSalary*0.15)*2))
        
      }
      else if (grossSalary >= 32334 && grossSalary <= 40667){
        netIncome = grossSalary + benefits -(400+((grossSalary*0.2)*2))
        
      }
      else if (grossSalary >= 40668 && grossSalary <= 49000){
        netIncome = grossSalary + benefits-(500+((grossSalary*0.25)*2))
        
      }
      else { 
        netIncome = grossSalary + benefits -(600+((grossSalary*0.3)*2))
        
         }
      console.log(netIncome)
    }
    
    payee(30000, 10000) 