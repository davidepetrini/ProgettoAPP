import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
  component: TabsPage,
  children: [
      {
          path: 'movimenti',
          children: [
              {
                  path: '',
                  loadChildren: '../movimenti/movimenti.module#MovimentiPageModule'
              }
          ]
      },
      
    {
      path: 'categorie',
      children: [
          {
              path: '',
              loadChildren: '../categorie/categorie.module#CategoriePageModule'
          }
      ]
    },
    {
      path: 'profilo',
       children: [
           {
               path: '',
               loadChildren: '../profilo/profilo.module#ProfiloPageModule' 
           }
       ]
   },
      {
        path: '',
        redirectTo: '/tabs/movimenti',
        pathMatch: 'full'
    }
  ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
