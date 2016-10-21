import { Component } from '@angular/core';


@Component({
  selector: 'meal-input',
  template: `
  <div class="jumbotron">
    <input #meal>
    <input #details>
    <input #calories>
  </div>
  `
})

export class MealInputComponent {

}
