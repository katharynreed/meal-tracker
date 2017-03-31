import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newFood = false;
  selectedFood = null;

  masterFoods: Food[] = [
    new Food ('Big Mac', 'I wish it were a Bigger Mac', 540),
    new Food ('McFries', 'I only got a medium #sad', 330),
    new Food ('Hi-C Orange Lavaburst', 'it was just so orange', 220),
  ];

  showNewFood() {
    this.newFood = true;
  }

  editFood(food) {
    this.selectedFood = food;
  }

  finishedEditing() {
    this.selectedFood = null;
  }
}
