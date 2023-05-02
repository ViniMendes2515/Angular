import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, DoCheck, OnDestroy {

  @Input() valorInicial :number = 10;

 constructor(){ this.log('constructor') };

 ngOnInit(){ this.log('ngOnInit') };

 ngOnChanges(){ this.log('ngOnChanges') };

 ngAfterContentInit(){ this.log('ngAfterContentInit') };

 ngAfterContentChecked(){ this.log('ngAfterContentChecked') };

 ngAfterViewInit(){ this.log('ngAfterViewInit') };

 ngAfterViewChecked(){ this.log('ngAfterViewChecked') };

 ngDoCheck(){ this.log('ngDoCheck') };

 ngOnDestroy(){ this.log('ngOnDestroy') };



 private log(hook : string){
  console.log(hook)
 }
}


