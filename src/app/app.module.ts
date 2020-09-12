import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinasDetailsComponent } from './disciplinas-details/disciplinas-details.component';
import { MediaGeralComponent } from './media-geral/media-geral.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'disciplinas', component: DisciplinasComponent},
      {path: 'disciplinas/:semestre/:index', component: DisciplinasDetailsComponent},
      {path: 'media-geral', component: MediaGeralComponent},
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinasComponent, DisciplinasDetailsComponent, MediaGeralComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
