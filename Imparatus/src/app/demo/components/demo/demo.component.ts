import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'Imparatus';

  items = ['Aretes', 'Collar', 'Pulsera', 'Tiara', 'Argolla'];

  objeto = {};

  power = 10;

  ngOnInit() {
    //code
  }
  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  constructor() { }


}
