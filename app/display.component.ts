import { Component, Input} from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'display-meals',
  template: `
  <div *ngFor="let meal of childMealList" class="container">

    <h3>{{meal.name}}</h3>
    <h4>{{meal.details}}</h4>
    <h4>caloric Intake:{{meal.calories}}</h4>

  </div>
  `
})

export class DisplayComponent {
  @Input() childMealList: Meal[];
}
