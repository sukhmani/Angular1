import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
  Inline Template
  <h2>welcome {{name}}</h2>
  {{2+2}}
  {{"Welcome " + name}}
  {{name.length}}
  {{name.toUpperCase()}}
  {{greetUser()}}
  </div> 
  <h2></h2>
  <input type = "text" value = "V">
  <input [id]="myId" type="text" value="v">
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="abc">
  `,
  styles: [`div{
    color: red;
  }`]
})
export class TestComponent implements OnInit {

public name = "me";
public myId = "testId";
public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " +this.name;

  }

}
