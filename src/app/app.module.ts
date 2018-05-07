import { SearchPipe } from './pipe/search.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './components/view/view.component';
import { HelpComponent } from './components/help/help.component';


import { AppRoutingModule } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    HelpComponent,
    SearchPipe

  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
