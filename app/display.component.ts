import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'display-meals',
  template: `
  <div *ngFor="let meal of childMealList" class="container">
    <h2>{{meal.name}}</h2>
    <h4>caloric Intake:<em> {{meal.calories}}</em></h4>
    <h5>{{meal.details}}</h5>
    <button (click)="editClicked(meal)" class='btn'>Edit</button>

  </div>
  `
})

export class DisplayComponent {
  @Input() childMealList: Meal[];
  @Output() mealEditSender = new EventEmitter();

  editClicked(mealToEdit){
    this.mealEditSender.emit(mealToEdit);
  };
}
