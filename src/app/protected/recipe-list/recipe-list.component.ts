import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  inFocus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  focusFunction() {
    this.inFocus = true;
  }

  focusOutFunction() {
    this.inFocus = false;
  }

  // setStyle() {
  //   this.currentStyles = {
  //     'border': this.inFocus ? '1px solid black' : '.5px solid rgba(0,0,0,0.3)',
  //     'box-sizing': 'border-box'
  //   };
  // }

}
