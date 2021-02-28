import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovimentiPage } from './movimenti.page';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
      path: '',
      component: MovimentiPage
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
  declarations: [MovimentiPage]
})
export class MovimentiPageModule {}
