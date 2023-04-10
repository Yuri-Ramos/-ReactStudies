import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo: string = "enable"
  corfundo: string = "blue";
  corDaFonte: string = "red";
  constructor() { }

  ngOnInit(): void {
  }
  trocar(): void {
    if (this.estilo === "disable") {
      this.estilo = "enable";
    } else {
      this.estilo = "disable"
    }
    console.log("Troquei")
  }
}
