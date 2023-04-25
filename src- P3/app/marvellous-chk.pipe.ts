import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value : number , Param : string) : any {
    
    if(Param == "Prime"){
      if(value === 1){
        return "It is not a Prime number";
      }
      else if(value === 2){
        return "It is a Prime number";
      }
      else{
        for(let i = 2; i < value; i++){
          if(value % i === 0){
            return "It is not a Prime number"
          }
        }
        return "It is a Prime number";
      }
    }

    else if(Param === "Perfect"){

      let sum = 0;
      for(let i = 1; i < value; i++){
        if(value % i === 0){
          sum += i;
        }
      }
      if(sum === value){
        return "It is a Perfect number";
      }
      else{
        return "It is not Perfect number";
      }

    }

    else if(Param === "Even"){
      if(value % 2 === 0){
        return "It is an Even number";
      }
      else{
        return "It is not an Even number";
      }
    }

    else if(Param === "Odd"){
      if(value % 2 !== 0){
        return "It is an Odd number";
      }
      else{
        return "It is not an Odd number";
      }
    }
    

  }

}
