import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itemize } from '../../../models/itemize';
import { Material } from '../../../models';
import { Model } from '../../../models/model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-form-shell',
  templateUrl: './form-shell.component.html',
  styleUrls: ['./form-shell.component.css']
})
export class FormShellComponent implements OnInit {
  model: Model
  constructor(private route: ActivatedRoute, private ds: DataService) { }

  ngOnInit() {
    this.route.data.subscribe((data:{model: any, class: any }) => {
      this.model = new data.class(data.model[0]).getModel()
      // this.model = data.model
    })
  }
  save(data) {
    this.ds.addData(data)
  }

}
