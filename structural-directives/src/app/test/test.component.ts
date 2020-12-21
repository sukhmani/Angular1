import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

<div [ngSwitch]= "color">
  <div *ngSwitchCase="'red'">red</div>
  <div *ngSwitchCase="'blue'">blue</div>
  <div *ngSwitchCase="'green'">green</div>
  <div *ngSwitchDefault> Pick again </div>
</div>

  <div *ngFor="let color of colors">
  <h2>{{color}}</h2>
  </div>
  
  `
  
  

  ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public color = "o";
  public colors = ["red","blue","green","yellow"];
  constructor() { }

  ngOnInit(): void {
  }

}
