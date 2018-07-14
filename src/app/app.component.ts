import { Component } from '@angular/core';
import { Material } from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  components = []
  constructor() {}
  selection(ev: string[]) {
    this.components = ev/* .map(val => {
      return {
        path: val.
      }
    }) */
  }
  
}