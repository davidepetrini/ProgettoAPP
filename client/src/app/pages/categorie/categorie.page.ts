import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { Categoria } from 'src/app/model/categoria.model';
import { DettaglioCategoriaPage } from '../dettaglio-categoria/dettaglio-categoria.page';
import {OverlayEventDetail} from '@ionic/core';

import { CategoriaService } from 'src/app/services/categoria.service';
import { MovimentoService } from 'src/app/services/movimento.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {
  private categorie$: Observable<Categoria[]>;
  categorie:Array<Categoria>;

  constructor(
    private categoriaService: CategoriaService,
    private movimentoService: MovimentoService,

    private alertController: AlertController,
    private modalController: ModalController) {
  }

  ngOnInit() {
    this.categorie$ = this.categoriaService.list();
  }

  

  doRefresh(event) {
    this.categorie$ = this.categoriaService.list()
        .pipe(tap(() => {
          event.target.complete();
        }));
  }

  listCategorie(){
    console.log("Lista Categorie");
    this.categoriaService.list().subscribe((app: Array<Categoria>) =>{
      this.categorie = app;
    })
  }

  async createCategoria() {
    const categoria = new Categoria();
   
    const modal = await this.modalController.create({
      component: DettaglioCategoriaPage,
      componentProps: {appParam: categoria}
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null && detail.data !== undefined) {
        this.categoriaService.createCategoria(detail.data).subscribe(() => {
          this.list();
        });
      } else {
        console.log('cancel button pressed');
      }
    });

    await modal.present();
  }



  async updateCategoria(categoria: Categoria, sliding: IonItemSliding) {
    sliding.close();
    const modal = await this.modalController.create({
      component: DettaglioCategoriaPage,
      componentProps: {appParam: categoria, inserimento: "false"}
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null && detail.data !== undefined) {
        this.categoriaService.updateCategoria(detail.data).subscribe(() => {
          this.list();
        });
      } else {
        console.log('cancel button pressed');
      }
    });
     await modal.present();
  }

  list() {
    this.categorie$ = this.categoriaService.list();//this.idCategoria
  }


  async delete( categoria: Categoria, sliding: IonItemSliding ){  
    sliding.close();  
    const alert = await this.alertController.create({
      header: 'Elimina Categoria',
      message: "TUTTI I MOVIMENTI CON TALE CATEGORIA SARANNO ELIMINATI. PROCEDERE?",
      cssClass:'buttonCss',
      buttons: [
        {
          text: 'Si',
          handler: () => {
                this.categoriaService.deleteCategoria(categoria).subscribe(()=>{
                  console.log("Categoria Eliminata");
                  this.list();
                });
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log("No Clicked");
          }
        }
      ]
    });
    await alert.present();
  }
}