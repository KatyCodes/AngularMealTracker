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

  <sort-meal
    (sortSender)="updateSortDisplay($event)"

  ></sort-meal>

  <display-meals
    [childMealList]="masterMealList"
    [childSortList]="sortDisplay"
    (mealEditSender)="setMealToEdit($event)"

  ></display-meals>

  <edit-meal
    [mealToEdit]="selectedMeal"
    (doneClickedSender)="finishedEditing()"
  ></edit-meal>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal ("Pizza", "I ate the whole thing", 5000),
    new Meal ("Salad", "I pretended it was pizza", 250),
    new Meal ("Mac n Cheese", "Finished the whole thing", 3600)
  ];

  public selectedMeal: Meal = null;
  public calorieDisplay: string = "";
  public sortDisplay: string = "all";


  addMeal(newMeal) {
    this.masterMealList.push(newMeal);
  }

  setMealToEdit(mealToEdit){
    this.selectedMeal = mealToEdit;
  }

  finishedEditing(){
    this.selectedMeal = null;
  }

  updateSortDisplay(sort){
    this.sortDisplay = sort;
  }



}
