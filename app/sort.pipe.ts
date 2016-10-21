import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(input: Meal[], sort){
    var output: Meal[] = [];
    if (sort === 'all'){
      return input;
    }
   else if (sort === 'over500') {
      for(var i = 0; i < input.length; i++) {
        if(input[i].calories > 500) {
          output.push(input[i]);
        }
      }
    } else if (sort === 'under500') {
        for(var i = 0; i < input.length; i++) {
          if(input[i].calories < 500) {
            output.push(input[i]);
          }
        }
     }
     return output;
  }
}
