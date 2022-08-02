import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;
  public heightPx: string = "25px";
  public backgroundColor: string = "red";

  public nome:string = "";
  public date:Date = new Date();

  public list: Array<{nome: string}> = [{nome: "Haji"}];
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.valor){
        this.valor = false;
      }else {
        this.valor = true;
      }

      if(this.heightPx === "25px"){
        this.heightPx = "50px";
        this.backgroundColor = "blue";
      }else {
        this.heightPx = "25px";
        this.backgroundColor = "red";
      }
    }, 2000);
  }

  public salvar(){
    this.list.push({nome: this.nome})
  }

}
