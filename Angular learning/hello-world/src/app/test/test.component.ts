import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template:`
    <h2>
      Welcome {{name}}
    </h2>
  <input [id]="myId" type="text" value="Anvesh Babu">
  <input id="{{myId}}" [disabled]="isDisabled" type="text" value="Anvesh Babu"> 
  <input id="{{myId}}" bind-disabled="isDisabled" type="text" value="Anvesh Babu"> 
  <h2 class="text-success">Anvesh Babu Unnam</h2>
  <h2 [class]="successClass">Anvesh Babu Unnam</h2>
  <h2 class="text-special" [class]="successClass">Anvesh Babu Unnam</h2>
  <h2 [class.text-danger]="hasError">Anvesh Babu Unnam</h2>
  <h2 [ngClass]="messageClasses">Anvesh Babu Unnam</h2>

  `,
  //styleUrls: ['./test.component.css']
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name="Anvesh Babu";

  //Creating property for binding
  public myId="testId";
  public isDisabled=false;

  //Class binding 
  public successClass="text-success";
  public hasError=true;
  public isSpecial=true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
