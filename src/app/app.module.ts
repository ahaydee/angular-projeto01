import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinasDetailsComponent } from './disciplinas-details/disciplinas-details.component';
import { SemestresComponent } from './semestres/semestres.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},      
      {path: 'semestres', component: SemestresComponent},      
      {path: 'semestres/:semestre', component: DisciplinasComponent},
      {path: 'semestres/:semestre/:disciplina', component: DisciplinasDetailsComponent}
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinasComponent, DisciplinasDetailsComponent, SemestresComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
