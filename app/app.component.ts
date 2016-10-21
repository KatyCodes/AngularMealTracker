import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <h1>Meal Tracker</h1>
  </div>
  <meal-input
    (newMealClickedSender)="addMeal($event)"
  ></meal-input>
  <display-meals
    [childMealList]="masterMealList"
  ></display-meals>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal ("Pizza", "I ate the whole thing", 5000),
    new Meal ("Salad", "I pretended it was pizza", 250),
    new Meal ("Mac n Cheese", "Finished the whole thing", 3600)
  ];

  addMeal(newMeal) {
    this.masterMealList.push(newMeal);
  }


}
