import { Component, Input, OnChanges, OnDestroy, OnInit, } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "Bem vindo";

  constructor() { }

  ngOnInit(): void {
    //inicia dados

  }

  ngOnChanges(): void {
    //sempre é invocado quando vem dados de fora
    console.log("foi alterado com sucesso!")  
  };

  ngOnDestroy(): void {
    console.log("Componente destruido");
  }

}
