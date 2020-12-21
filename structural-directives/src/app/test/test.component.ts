import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `



  
  <div *ngIf = "displayName; then thenBlock; else elseBlock">A</div>


  <ng-template #thenBlock>
  <h2>then</h2>
  </ng-template>

  <ng-template #elseBlock>
  <h2>
  else
  </h2>
  </ng-template>
  `
  
  

  ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  displayName = false;
  constructor() { }

  ngOnInit(): void {
  }

}
