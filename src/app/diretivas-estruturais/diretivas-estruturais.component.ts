import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public nome:string = "felipe"

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Felipe", idade: 31 },
    { nome: "Jose", idade: 30 },
    { nome: "Maria", idade: 32 }
  ]

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }

    }, 2000)
  }

  public onClick(): void {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList(): void {
    this.list.push({nome: "Away", idade: 99})
  }

  public onClickEventList(event: number): void {
   this.list.splice(event, 1);
  }


}
