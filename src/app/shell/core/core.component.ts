import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model} from '../../../models/model';
import { Itemize } from '../../../models/itemize';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  items: any[]
  item: Model = {}
  modelClass: any
  listType = ""
  keys = []
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data:{items: any, class: Itemize, listType: string }) => {
      console.log(data)
      this.items = data.items
      this.modelClass = data.class
      this.listType = data.listType
      this.item = new this.modelClass().getModel()
      this.keys = this.modelClass.displayInfo()
    })
  }
  
  selection(ev: Itemize) {
    this.router.navigate(['./' + ev.id], { relativeTo: this.route });
  }

}
