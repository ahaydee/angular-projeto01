import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinasDetailsComponent } from './disciplinas-details/disciplinas-details.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},      
      {path: 'disciplinas', component: DisciplinasComponent},      
      {path: 'disciplinas/:index', component: DisciplinasDetailsComponent}
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinasComponent, DisciplinasDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
