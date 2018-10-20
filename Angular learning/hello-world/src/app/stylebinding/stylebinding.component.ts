import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  template: `
  <h2>
    Welcome {{name}}
    </h2>

    <h2 [style.color]="'orange'">Style Binding</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Anvesh Babu</h2>
    <h2 [style.color]="highlightColor">Style Binding 2</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `,
  styles:[]
})
export class StylebindingComponent implements OnInit {

  public name = "Anvesh Babu";
  public hasErroe = false;
  public isSpecial =true; 
  
  public highlightColor="orange";
  public titleStyles ={
    color: "blue",
    fontStyle: "italic" 
  }

  constructor() { }

  ngOnInit() {
  }

}
