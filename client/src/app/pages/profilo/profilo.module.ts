import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProfiloPage } from './profilo.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { createTranslateLoader } from 'src/app/app.module';

const routes: Routes = [
  {
      path: '',
      component: ProfiloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [ProfiloPage]
})
export class ProfiloPageModule {}
