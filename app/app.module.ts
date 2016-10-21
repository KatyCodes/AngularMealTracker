import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealInputComponent } from './meal-input.component';
import { DisplayComponent } from './display.component'
import { EditMealComponent } from './edit-meal.component'
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealInputComponent,
    DisplayComponent,
    EditMealComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
