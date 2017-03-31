import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent {
  @Output() addClicker = new EventEmitter();
  @Output() showClicker = new EventEmitter();

  newFood = false;

  addFoodHasBeenClicked(food, details, calories) {
    var params = {
      "food": food,
      "details": details,
      "calories": calories
    }
    this.addClicker.emit(params);
  }

  showNewFoodForm() {
    this.newFood = true;
  }
}
