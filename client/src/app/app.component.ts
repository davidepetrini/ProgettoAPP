import {Component, OnInit} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {LinguaService} from './services/lingua.service';
import {UtenteService} from './services/utente.service';
import {TranslateService} from '@ngx-translate/core';
import {Utente} from './model/utente.model';
import {BehaviorSubject} from 'rxjs';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    private utente$: BehaviorSubject<Utente>;



    constructor(private platform: Platform,
                private splashScreen: SplashScreen,
                private linguaService: LinguaService,
                private utenteService: UtenteService,
                private translate: TranslateService,
                private navController: NavController,
                private statusBar: StatusBar) {
        this.initializeApp();
    }

    ngOnInit(): void {
        this.utente$ = this.utenteService.getUtente();
        this.navController.navigateRoot('tabs');//login
    }

    profilo() {
        this.navController.navigateForward('profilo');
    }

    openPage(url: string) {
        this.navController.navigateForward(url);
    }

    logout() {
        this.utenteService.logout();
        this.navController.navigateRoot('login');
    }
    

    initializeApp() {
        this.platform.ready().then(() => {
            this.initTranslate();
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            
        });
    }

    initTranslate() {
        // Set the default language for translation strings, and the current language.
        const linguaPreferita = this.linguaService.getLinguaPreferita();
        this.translate.setDefaultLang(linguaPreferita);
        this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
            if (lingua != null) {
                this.translate.use(lingua);
            } else {
                this.translate.use(linguaPreferita);
                this.linguaService.updateLingua(linguaPreferita);
            }
        });
    }

}
