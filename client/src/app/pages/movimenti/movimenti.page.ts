import { Component, OnInit } from '@angular/core';
import {AlertController, IonItemSliding, ModalController} from '@ionic/angular';
import {OverlayEventDetail} from '@ionic/core';


import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { Movimento } from 'src/app/model/movimento.model';
import { MovimentoPage} from '../movimento/movimento.page';
import { MovimentoService } from 'src/app/services/movimento.service';
import { sum } from 'lodash';

@Component({
  selector: 'app-movimenti',
  templateUrl: './movimenti.page.html',
  styleUrls: ['./movimenti.page.scss'],
})
export class MovimentiPage implements OnInit {
  private movimenti$: Observable<Movimento[]>;
  movimenti: Array<Movimento>;
  movimento = new Movimento();


  constructor(private movimentoService: MovimentoService,
              private modalController: ModalController,
              //private app: App
    ) {
  }

  ngOnInit() {
    this.movimenti$ = this.movimentoService.list();
  }

  doRefresh(event) {
    this.movimenti$ = this.movimentoService.list()
        .pipe(tap(() => {
          event.target.complete();
        }));
  }

  listMovimenti(){
    console.log("Lista Movimenti");
    this.movimentoService.list().subscribe((app: Array<Movimento>) =>{
      this.movimenti = app;
    })
  }

  totalMovimento(){
    let total = 9;
  }
  
  /*{
    let total = 0;
    //console.log(this.movimento.categoria.segno);
    for(var i = 0; i < this.movimenti.length; i++){
        var movimento = this.movimento[i];
        if (movimento.categoria.segno == 'ENTRATA'){
                  total += this.movimento.importo;
                  
        }else{
          total -= this.movimento.importo;
        }
    }
    return total;
}*/

    
  

  async updateMovimento(movimento: Movimento, sliding: IonItemSliding) {
    sliding.close();
    const modal = await this.modalController.create({
      component: MovimentoPage,
      componentProps: {appParam: movimento}
    });
    /*modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null && detail.data !== undefined) {
        this.categoriaService.updateMovimento(detail.data).subscribe(() => {
          this.listMovimento();
        });
      } else {
        console.log('cancel button pressed');
      }
    });*/
    return await modal.present();
  }
}


