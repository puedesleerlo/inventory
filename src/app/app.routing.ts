import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './shell/core/core.component';
import { ResolverApi } from './shell/core/resolverApi';
import { Material, Account } from '../models';
import { FormResolver } from './shell/form-shell/form.resolver';
import { FormShellComponent } from './shell/form-shell/form-shell.component';
import { environment } from '../environments/environment';

//ToDo: Guard CanActivateChild

const appRoutes: Routes = [
  {
    path: '',
    component: CoreComponent,
    resolve: {
      items: ResolverApi
    },
    data: {
      api: environment.api2 + "materials",
      listType: "table",
      class: Material
    },
  },
  // {
  //   path: 'materials',
  //   component: CoreComponent,
  //   resolve: {
  //       items: ResolverApi
  //   },
  //   data: {
  //     api: environment.api2 + "materials",
  //     listType: "table",
  //     class: Material
  //   },
  //   children: [
  //     {
  //       path: ":id",
  //       component: FormShellComponent,
  //       resolve: {
  //         model: FormResolver
  //       },
  //       data: {
  //         class: Material,
  //         api: environment.api2 + "materials"
  //       }
  //     },
  //     {
  //       path: "",
  //       component: FormShellComponent,
  //       data: {
  //         model: new Material(),
  //         class: Material,
  //         api: environment.api2 + "materials"
  //       }
  //     }
  //   ]
  // },
  {
    path: 'accounts',
    component: CoreComponent,
    resolve: {
      items: ResolverApi
    },
    data: {
      api: environment.api2 + "chartofaccounts",
      listType: "table",
      idName: "chartofaccountsid",
      class: Account
    },
    children: [
      {
        path: ":id",
        component: FormShellComponent,
        resolve: {
          model: FormResolver
        },
        data: {
          class: Account,
          api: environment.api2 + "chartofaccounts",
          idName: "chartofaccountsid"
        }
      },
      {
        path: "",
        component: FormShellComponent,
        data: {
          model: new Account(),
          class: Account,
          api: environment.api + "chartofaccounts"
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
