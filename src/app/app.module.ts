import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordFieldComponent } from './components/passwordField/passwordField.component';
import { validateSectionComponent } from './components/validateSection/validateSection.component';


@NgModule({
  declarations: [
    AppComponent,
    PasswordFieldComponent,
    validateSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
