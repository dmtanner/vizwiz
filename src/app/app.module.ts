import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ResponseModule } from './responses/response.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ]),
    ResponseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
