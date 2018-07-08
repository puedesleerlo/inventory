import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './shell/core/core.component';
import { ResolverApi } from './shell/core/resolverApi';
import { Material } from '../models';
import { FormResolver } from './shell/form-shell/form.resolver';
import { FormShellComponent } from './shell/form-shell/form-shell.component';

//ToDo: Guard CanActivateChild

const appRoutes: Routes = [
  {
        path: '',
        component: CoreComponent,
        resolve: {
            items: ResolverApi
        },
        data: {
          api: "materials",
          listType: "table",
          class: Material
        },
  },
  {
    path: 'materials',
    component: CoreComponent,
    resolve: {
        items: ResolverApi
    },
    data: {
      api: "materials",
      listType: "table",
      class: Material
    },
    children: [
      {
        path: ":id",
        component: FormShellComponent,
        resolve: {
          model: FormResolver
        },
        data: {
          class: Material,
          api: "materials"
        }
      },
      {
        path: "",
        component: FormShellComponent,
        data: {
          model: new Material(),
          class: Material,
          api: "materials"
        }
      }
    ]
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ResolverApi,
    FormResolver
  ]
})
export class AppRoutingModule { }
