import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos: string[] = [];
  menuType:string= "SuperAdmssin";
  constructor() {
    this.produtos = [
      "mouser",
      "teclado",
      "cabo",
      "font"
      ];
  }

  ngOnInit(): void {
  }
  adicionar() {
  this.produtos.push("produto adicionado");
  }
  remover(index: number): void {
    alert(index + "removido");
  this.produtos.splice(index);
  }
}
