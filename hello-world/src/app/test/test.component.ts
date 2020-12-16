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
  </div>`,
  styles: [`div{
    color: red;
  }`]
})
export class TestComponent implements OnInit {

public name = "me";
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " +this.name;

  }

}
