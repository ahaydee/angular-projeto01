import { Component, OnInit } from '@angular/core';
import { semestres } from '../consts';

@Component({
  selector: 'app-media-geral',
  templateUrl: './media-geral.component.html',
  styleUrls: ['./media-geral.component.css']
})
export class MediaGeralComponent implements OnInit {
  list = semestres;
  notas;

  getNotas(nome: string) {
    let qtde = 0;
    let notas: number[] = [];
    this.list.forEach(semestre => {
      semestre.disciplinas.forEach(disciplinas => {
        disciplinas.notas.forEach(nota =>{
          if (nota.situacao != "A Cursar") {
            if (nota.nome == nome) {
              qtde++;
              notas.push(nota.nota);
            }
          }
        });
      });
    });
    return {
      qtde: qtde,
      notas: notas
    }
  }

  getMediaAnna() {
    return this.notas["anna"].notas / this.notas["anna"].qtde;
  }

  getMediaDanubia() {
    return this.notas["danubia"].notas / this.notas["danubia"].qtde;
  }

  constructor() { 
    this.notas["anna"] = this.getNotas("anna");
    this.notas["danubia"] = this.getNotas("danubia");
  }

  ngOnInit() {
  }

}