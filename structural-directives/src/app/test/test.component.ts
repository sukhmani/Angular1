import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `


<h2>{{"hi  " + parentData}}</h2>

  
  
  `
  
  

  ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public color = "o";
  public colors = ["red","blue","green","yellow"];
  @Input() public parentData;

  constructor() { }

  ngOnInit(): void {
  }

}
