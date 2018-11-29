import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs';
import { map, take }              from 'rxjs/operators';
import { DataService } from '../../data.service';

 
@Injectable()
export class FormResolver implements Resolve<any> {
  constructor(private ds: DataService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    let id = route.paramMap.get('id');
    this.ds.setId(route.data.setId)
    this.ds.setURL(route.data.api)
    this.ds.searchData(id).subscribe(data => console.log(data))
    return this.ds.searchData(id)
  }
}