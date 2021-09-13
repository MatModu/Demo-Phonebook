import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhoneBookComponent } from './phonebook/phonebook.component';
import { PhonebookDetailComponent } from './phonebook-details/phonebook.detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  declarations: [
    AppComponent,
    PhoneBookComponent,
    PhonebookDetailComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
