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

  
  
  `
  
  

  ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public color = "o";
  constructor() { }

  ngOnInit(): void {
  }

}
