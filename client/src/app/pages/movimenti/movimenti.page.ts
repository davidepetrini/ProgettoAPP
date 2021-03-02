import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ModalController, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';


import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { Movimento } from 'src/app/model/movimento.model';
import { MovimentoPage} from '../movimento/movimento.page';
import { MovimentoService } from 'src/app/services/movimento.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Categoria, SEGNO } from 'src/app/model/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-movimenti',
  templateUrl: './movimenti.page.html',
  styleUrls: ['./movimenti.page.scss'],
})
export class MovimentiPage implements OnInit {
  private movimenti$: Observable<Movimento[]>;
  movimenti: Array<Movimento>;
  //movimento = new Movimento();
  private idCategoria: number;
  inserimento:boolean;
  private idMovimento: number;
result: number;


portafoglio : string = "portafoglio";




  constructor(private route: ActivatedRoute,
    private movimentoService: MovimentoService,
              private modalController: ModalController,
              public navCtrl: NavController
    ) {
  }



  ngOnInit() {
    this.movimenti$ = this.movimentoService.list();
    
  }
  /* valido, provo l'altro tipo, funziona anche questo da capire le differenze
  
  ngOnInit() {
    //this.initTranslate();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idMovimento = parseInt(params.get('id'), 0);
      this.list();
    });
  }*/

  doRefresh(event) {
    this.movimenti$ = this.movimentoService.list()
    
        .pipe(tap(() => {
          event.target.complete();
          
        }));
  }
  async createMovimento() {
    const movimento = new Movimento();
    movimento.categoria = new Categoria();
    movimento.categoria.id = this.idCategoria;
    const modal = await this.modalController.create({
      component: MovimentoPage,
      componentProps: {appParam: movimento}
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null && detail.data !== undefined) {
        this.movimentoService.createMovimento(detail.data).subscribe(() => {
          this.list();
          this.inserimento = false; 

        });
      } else {
        console.log('cancel button pressed');
      }
    });

    await modal.present();
  }


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
      componentProps: {appParam: movimento, inserimento: "false"}
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

  
total(importo: number){
  this.result = this.result + importo;
  return this.result;
  console.log(this.result);
}
}


