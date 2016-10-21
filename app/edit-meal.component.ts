import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'edit-meal',
  template: `
  <div class='col-sm-6' *ngIf="mealToEdit">
   <div class='well'>
     <h2>Edit Meal</h2>
     <div class='form-group'>
       <label>Meal Name:</label>
       <input [(ngModel)]="mealToEdit.name" class='form-control'>
     </div>
     <div class='form-group'>
       <label>Details:</label>
       <input [(ngModel)]="mealToEdit.details" class='form-control'>
     </div>
     <div class='form-group'>
       <label>Calories:</label>
       <input [(ngModel)]="mealToEdit.calories" class='form-control'>
     </div>
     <button (click)="doneClicked()" class='btn pull-right'>Save</button>
   </div>
 </div>
   `
  })

  export class EditMealComponent {
    @Input() mealToEdit: Meal;
    @Output() doneClickedSender = new EventEmitter();

    doneClicked(){
      this.doneClickedSender.emit();
    }
}
