import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

    <!-- <app-diretivas-atributos>
      <h1>Aulas diretivas de atributo</h1>
    
    </app-diretivas-atributos> -->

    <app-test-comp></app-test-comp>

    <app-input [contador]="addValue"></app-input>
    <button (click)="add()">Adiciona</button>
  

    
    <app-output (enviarDados)="setDados($event)"></app-output>
    <ng-template [ngIf]="getDados">
        <h1>{{getDados.nome}}</h1>
        <h2>{{getDados.idade}}</h2>
    </ng-template>
  
    
    <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
    <router-outlet></router-outlet>
    `,

})
export class AppComponent implements OnInit{

  public addValue: number = 7;
  public getDados: {nome: string, idade:number} | undefined;

  constructor() {}

  ngOnInit(): void {}

  public add(): void {
    this.addValue += 1
  }

  public setDados(event: {nome: string, idade:number}){
    this.getDados = event;
  }

}
