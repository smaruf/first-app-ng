import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UserService} from "./service/user.service";
import { NewComponent } from './user/new/new.component';
import {StorageService} from "./service/storage.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
