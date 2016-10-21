import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-input',
  template: `
  <div class="well">
    <label>Enter food name:</label>
    <input #name>

    <label>Details:</label>
    <input #details>

    <label>Calories:</label>
    <input #calories>

    <button (click)="newMealClicked(name.value, details.value, calories.value)" class="btn">Enter</button>
  </div>
  `
})

export class MealInputComponent {
  @Output() newMealClickedSender = new EventEmitter();
    newMealClicked(name: string, details: string, calories: string){
      var cal = parseInt(calories);
      var newMeal = new Meal(name, details, cal);
      this.newMealClickedSender.emit(newMeal);
    }
}
