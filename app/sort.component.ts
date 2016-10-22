import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'sort-meal',
  template: `
  <div class="container">
  <label>Sort by calories:</label>
    <select id="calorieSearch" (change)="onChange($event.target.value)" class='form'>
      <option value='all'>All</option>
      <option value='over500'>Meals with 500 Calories or more</option>
      <option value='under500'>Meals less than 500 Calories</option>
    </select>
  </div>
   `
})

  export class SortMealComponent {
    @Output() sortSender = new EventEmitter();

    onChange(sort){
      this.sortSender.emit(sort);
    }

  }
