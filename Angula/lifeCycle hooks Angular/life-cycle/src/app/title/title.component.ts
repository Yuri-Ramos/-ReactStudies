import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() name: string = '';
	constructor() {
		console.log("i am contrutor");
	 }

	ngOnChanges(): void{
			console.log("Eu sou o change");
		}
		ngOnInit(): void{
		this.name =`olaáaa ${this.name} turu bom ?`
		}


}
