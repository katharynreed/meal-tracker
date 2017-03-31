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

  addFoodHasBeenClicked(name, details, calories) {
    var params = {
      "name": name,
      "details": details,
      "calories": calories
    }
    if (params.name === "" || params.calories === "") {
      alert('Please enter required information to track food');
    } else {
      this.addClicker.emit(params);
    }
  }

  showNewFoodForm() {
    this.newFood = true;
  }
}
