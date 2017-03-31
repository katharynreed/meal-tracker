import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: "calorie",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Food[]) {
    var output: Food[] = [];
    if(desiredCalories === "highCalorieFoods") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalories === "lowCalorieFoods") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
  
}
