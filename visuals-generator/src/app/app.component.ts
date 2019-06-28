import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visuals-generator';

  //OUTPUT VARIABLES
  polygonsOutput: Array<polygon> = [];
  //WINDOW DIMENSIONS
  windowHeight: number = window.innerHeight;
  windowWidth: number = window.innerWidth;
  //REFRESH SPEED
  refreshSpeed: number = 100;

/////////////////////////////////////////////////////////
  // YOUR CODE GOES HERE

  constructor(){
    //LOOP
    timer(0, this.refreshSpeed).pipe(
      take(10000))
    .subscribe(x=>{
      //CODE TO LOOP GOES HERE
    });
  }
}

class polygon {

}

/////////////////////////////////////////////////////////

