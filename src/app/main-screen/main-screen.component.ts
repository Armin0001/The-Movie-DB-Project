import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
 
  constructor() { }

  private numberOfChanges: number = 0;

  ngOnChanges() {
    this.numberOfChanges++;
    console.log(this.numberOfChanges);
  }

  ngOnInit(): void {
  }

  this_output(target: any) {

  }

 

}

