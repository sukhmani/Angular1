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
  <h2 [class.text-danger]="hasError" >SelectStyleBasedOnProperty</h2>
  <h2 [ngClass]="messageClasses">ConditionallyApplyMultipleClasses</h2>
  <button (click)="onClick($event)">Greet</button>

  {{greeting}}
  <input #myInput type ="text">
  <button (click)="logMessage(myInput.value)">log</button>
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
public hasError = false;
public isSpecial = true;
public messageClasses = {
  "text-success": !this.hasError,
  "text-danger": this.hasError,
  "text-special": this.isSpecial
}
public greeting = "";

  constructor() { }

  ngOnInit(): void {
  }

    onClick($event)  {
      console.log(event)
      this.greeting = event.type;
    }

  greetUser(){
    return "Hello " +this.name;

  }
  logMessage(value){
    console.log(value);
  }

}
