import { Component, OnInit } from '@angular/core';

import {semestres} from '../consts.ts';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  list = semestres;

  constructor() { }

  ngOnInit() {
  }

}