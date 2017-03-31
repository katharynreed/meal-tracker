import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent {
  @Input() childFoodList: Food[];
  @Output() editClicker = new EventEmitter();

  editFoodHasBeenClicked(foodToEdit: Food) {
    this.editClicker.emit(foodToEdit);
  }

  calorieFiltration(food) {
    if (food.calories < 500) {
      return "bg-success";
    } else if (food.calories > 500) {
      return "bg-danger";
    }
  }


}
