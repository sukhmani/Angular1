import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `


<h2>{{"hi  " + namee}}</h2>
<button (click)="fireEvent()"> Send Event</button>
  
  
  `
  
  

  ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

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
