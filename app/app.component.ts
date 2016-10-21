import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <h1>Meal Tracker</h1>
  </div>
  <meal-input></meal-input>
  `
})

export class AppComponent {

}
