import { Component, OnInit } from '@angular/core';

import {semestres} from '../consts';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  list = semestres;
  semestre;

  getDisciplinas(){
    return this.list[this.semestre-1].disciplinas;
  }

  constructor() { 
    this.semestre = 1;
  }

  ngOnInit() {
  }

}