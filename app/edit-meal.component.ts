import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'edit-meal',
  template: `
  <div class='col-sm-6' *ngIf="mealToEdit">
    <p>here</p>
  </div>
   `
  })

  export class EditMealComponent {
    @Input() mealToEdit: Meal;
}
