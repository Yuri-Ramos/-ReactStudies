import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

	name: string = "Yurizao";
	constructor() { }

	ngOnChanges(): void{
			console.log("Eu sou o change");
		}
		ngOnInit(): void{
			console.log(`'Oieee ${this.name}`);
		}




}
