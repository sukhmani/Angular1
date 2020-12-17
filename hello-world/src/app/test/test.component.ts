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
  <h2 class= "text-success">style</h2>
  <h2 [class]="successClass">classBinding</h2> 
  <h2 class="text-special" ><h2>
  `,
  styles: [`
  
  .text-success {color: green;}
  .text-danger {color: red;}
  .text-special {font-style: italic;}
  `]
})
export class TestComponent implements OnInit {

public name = "me";
public myId = "testId";
public isDisabled = false;
public successClass = "text-success";

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " +this.name;

  }

}
