import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template:`
    <h2>
      Welcome {{name}}
    </h2>
    <button (click)="onClick($event)">Greet</button>
    {{greeting}}

    <input #myInput type="text">

    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styles: []
})
export class EventbindingComponent implements OnInit {

  public name ="Anvesh chowdary";
  public greeting="";
  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log(event);
    this.greeting="Welcome to Anvesh Babu";
  }

  logMessage(value)
  {
    console.log(value);
  }

}
