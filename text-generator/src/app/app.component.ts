import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text-generator';

  //INPUT VARIABLE
  public userTextInput: string = "";

  //OUTPUT VARIABLES
  public generatedText: string = "";
  public generatedTextColumn1: string = "";
  public generatedTextColumn2: string = "";
  public generatedTextColumn3: string = "";

  //////////////////////////////////////////////////////////////////////////////
  // YOUR CODE HERE

  constructor() {

  }

 //////////////////////////////////////////////////////////////////////////////
}


    //LOOP
    /*timer(0, 5000).pipe(
      take(10000))
    .subscribe(x=>{
      //CODE TO LOOP GOES HERE
    });*/