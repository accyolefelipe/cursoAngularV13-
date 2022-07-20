import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Felipe";
  public idade: number = 31;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;
  public imgTitle: string = "foto do git"
  public imgSrc: string = "https://avatars.githubusercontent.com/u/47544685?v=4"

  public position: {x: number, y:number} = {x: 0, y: 0}
  constructor() { }

  ngOnInit(): void {
  }

  public eventoDeClick(valor: string) {
    alert(valor);
  }
  public eventoDeClick2(valor2: MouseEvent) {
    console.log(); 
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY

  }



}
