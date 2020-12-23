import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `


<h2>{{"hi  " + namee}}</h2>
<button (click)="fireEvent()"> Send Event</button>

<h2> {{  namee | lowercase }} </h2>
<h2> {{ namee | uppercase }} </h2>
<h2> {{ message | titlecase }} </h2>
<h2> {{ namee | slice:3 }} </h2>
  
  `
  
  

  ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public message = "abc";
  public color = "o";
  public colors = ["red","blue","green","yellow"];
  @Input('parentData') public namee ;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
fireEvent(){
  this.childEvent.emit('hey coder');
}
}
