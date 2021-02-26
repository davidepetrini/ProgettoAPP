import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';


import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { Movimento } from 'src/app/model/movimento.model';
import { MovimentoPage} from '../movimento/movimento.page';
import { MovimentoService } from 'src/app/services/movimento.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movimenti',
  templateUrl: './movimenti.page.html',
  styleUrls: ['./movimenti.page.scss'],
})
export class MovimentiPage implements OnInit {
  private movimenti$: Observable<Movimento[]>;
  //movimenti: Array<Movimento>;
  movimento = new Movimento();
  inserimento:boolean;
  private idMovimento: number;




  constructor(private route: ActivatedRoute,
    private movimentoService: MovimentoService,
              private modalController: ModalController,
              
              //private app: App
    ) {
  }

  ngOnInit() {
    //this.initTranslate();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idMovimento = parseInt(params.get('id'), 0);
      this.list();
    });
  }

  doRefresh(event) {
    this.movimenti$ = this.movimentoService.list()
        .pipe(tap(() => {
          event.target.complete();
        }));
  }

  /*listMovimenti(){
    console.log("Lista Movimenti");
    this.movimentoService.list().subscribe((app: Array<Movimento>) =>{
      this.movimenti = app;
    })
  }*/

  /*
  UpdateMovimento(n: Movimento) {
    this.movimentoService.findById(n.id).subscribe((movimento: Movimento) =>{
     console.log(movimento);
     this.app.getRootNav().push(MOVIMENTO_PAGE,{"inserimento":false,"movimento":movimento});
    })
    
  }*/


  async updateMovimento(movimento: Movimento, sliding: IonItemSliding) {
    //sliding.close();
    const modal = await this.modalController.create({
      component: MovimentoPage,
      componentProps: {appParam: movimento}
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null && detail.data !== undefined) {
        this.movimentoService.updateMovimento(detail.data).subscribe(() => {
          this.list();
        });
      } else {
        console.log('cancel button pressed');
      }
    });
    return await modal.present();
  }



  list() {
    this.movimenti$ = this.movimentoService.list();//this.idMovimento
  }

  
}


