import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'sort-meal',
  template: `
    <select id="calorieSearch" (change)="onChange($event.target.value)" class='form'>
      <option value='all'>All</option>
      <option value='over500'>Meals with more than 500 Calories</option>
      <option value='under500'>Meals less than 500 Calories</option>
    </select>
   `
})

  export class SortMealComponent {
    @Output() sortSender = new EventEmitter();

    onChange(sort){
      this.sortSender.emit(sort);
    }

  }
