import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealInputComponent } from './meal-input.component';
import { DisplayComponent } from './display.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MealInputComponent
    DisplayComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
