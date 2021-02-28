import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';
import { LinguaService } from './services/lingua.service';
import { UtenteService } from './services/utente.service';
import { CategoriaService } from './services/categoria.service';
import { CatUteService } from './services/catUte.service';
import { MovimentoService } from './services/movimento.service';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
    IonicStorageModule.forRoot({
    name: 'savemymoney__db', //savemymoney__db
    driverOrder: ['indexeddb', 'sqlite', 'websql']
})],
  providers: [
    NavParams,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    httpInterceptorProviders,
    LinguaService,
    UtenteService,
    CategoriaService,
    MovimentoService,
    CatUteService
  ], 
  bootstrap: [AppComponent],
})
export class AppModule {}
