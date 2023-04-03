import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent implements OnInit{
  pessoa : any = {
    nome : "Vinicius",
    idade: 19,
    end : {
      rua : "Arlinda Cruvinel Borges",
      cep: 38040100
    }
  }

  nome: any = 'abc'

  constructor() {}

  ngOnInit(): void {

  }
}
