import { Component, OnInit } from '@angular/core';
import { semestres } from '../consts';

@Component({
  selector: 'app-media-geral',
  templateUrl: './media-geral.component.html',
  styleUrls: ['./media-geral.component.css']
})
export class MediaGeralComponent implements OnInit {
  list = semestres;
  notas = [];

  getNotas(nome: string) {
    let qtde = 0;
    let notas = 0;
    this.list.forEach(semestre => {
      semestre.disciplinas.forEach(disciplinas => {
        disciplinas.notas.forEach(nota =>{
          if ((nota.situacao == "Aprovado" || nota.situacao == "Dispensado")&& nota.nome == nome) {
            qtde++;
            notas+=nota.nota;
          }
        });
      });
    });
    return {
      nome: nome,
      qtde: qtde,
      media: this.getMedia(qtde, notas)
    }
  }

  getMedia(qtde: number, notas: number) {
    return notas / qtde;
  }

  constructor() { 
    this.notas.push(this.getNotas("Anna"));
    this.notas.push(this.getNotas("Danubia"));
  }

  ngOnInit() {
  }

}