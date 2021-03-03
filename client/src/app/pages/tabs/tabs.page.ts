import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {BehaviorSubject, Observable} from 'rxjs';
import { OverlayEventDetail } from '@ionic/core';
import { Movimento } from 'src/app/model/movimento.model';
import { MovimentoService } from 'src/app/services/movimento.service';
import {Utente} from '../../model/utente.model';
import {UtenteService} from '../../services/utente.service';
import { MovimentoPage } from '../movimento/movimento.page';
import { LinguaService } from 'src/app/services/lingua.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  private utente$: BehaviorSubject<Utente>;
  private movimenti$: Observable<Movimento[]>;



  constructor(private utenteService: UtenteService,
    private modalController: ModalController,
    private navController: NavController,
    private linguaService: LinguaService,
    private translate: TranslateService,
    private movimentoService: MovimentoService) { }

  ngOnInit() {
    this.utente$ = this.utenteService.getUtente();
    
  }

  list() {
    this.movimenti$ = this.movimentoService.list();//this.idMovimento
  }

  async createMovimento() {
    const movimento = new Movimento();
    const modal = await this.modalController.create({
      component: MovimentoPage,
      componentProps: {appParam: movimento}
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null && detail.data !== undefined) {
        this.movimentoService.createMovimento(detail.data).subscribe(() => {
          this.list();
        });
      } else {
        console.log('cancel button pressed');
      }
    });

    await modal.present();
  }


}
