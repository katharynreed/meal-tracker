import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { CaloriePipe } from './calorie.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewFoodComponent,
    FoodDetailComponent,
    EditFoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
