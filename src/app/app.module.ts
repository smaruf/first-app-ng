import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {UserComponent} from './users/user/user.component';
import {UserService} from "./service/user.service";
import {NewComponent} from './users/new/new.component';
import {StorageService} from "./service/storage.service";
import {UsersComponent} from './users/users.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: 'new', component: NewComponent },
      { path: ':id', component: UserComponent }
    ]
  },

  { path: '', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NewComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
