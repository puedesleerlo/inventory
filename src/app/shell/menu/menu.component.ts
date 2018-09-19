import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() selected = new EventEmitter<string[]>()
  selection = new SelectionModel<string>(true, []);
  features = [
    {
      path: "materials",
      label: "Materials"
    },
    {
      path: "accounts",
      label: "Accounts"
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  clicked() {
      this.selected.emit(this.selection.selected)
  }

}
