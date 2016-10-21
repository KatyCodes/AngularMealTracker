import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealInputComponent } from './meal-input.ts';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MealInputComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
