import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { InfoPage } from './info.page';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: InfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
