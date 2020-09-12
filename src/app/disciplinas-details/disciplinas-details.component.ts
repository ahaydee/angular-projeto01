import { Component, OnInit } from '@angular/core';

import { semestres } from '../consts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas-details',
  templateUrl: './disciplinas-details.component.html',
  styleUrls: ['./disciplinas-details.component.css']
})
export class DisciplinasDetailsComponent implements OnInit {
  disciplina;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let index = params.get('index');
      let semestre = parseInt(params.get('semestre'))-1;
      this.disciplina = semestres[semestre].disciplinas[index];
    });
  }

}