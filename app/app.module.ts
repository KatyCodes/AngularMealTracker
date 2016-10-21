import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealInputComponent } from './meal-input.component';
import { DisplayComponent } from './display.component'
import { EditMealComponent } from './edit-meal.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MealInputComponent,
    DisplayComponent,
    EditMealComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
