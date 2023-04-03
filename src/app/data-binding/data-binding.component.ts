import { Component, OnInit } from '@angular/core';
import { MeuFormComponent  } from '../meu-form/meu-form.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  public url: string = 'https://www.amazon.com.br/ref=nav_logo';
  cursoAngular: boolean = true;
  urlImage =
    'https://cdn.lorem.space/images/movie/.cache/150x220/black-widow-2.jpg';

  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Nu ze');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
