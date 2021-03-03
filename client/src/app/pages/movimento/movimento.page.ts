import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonItemSliding, IonRefresher, ModalController, NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria.model';
import { Movimento } from 'src/app/model/movimento.model';
import { Utente } from 'src/app/model/utente.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MovimentoService } from 'src/app/services/movimento.service';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.page.html',
  styleUrls: ['./movimento.page.scss'],
})
export class MovimentoPage implements OnInit {
  private movimento$: Observable<Movimento>;
  private categorie$: Observable<Categoria[]>;
  private idCategoria: number;


  private movimento: Movimento;
  private movimentoFormModel: FormGroup;
  private categorie: Array<Categoria>;
  inserimento: boolean = false;



  private deleteTitle: string;
  private messageTitle: string;
  private deleteButton: string;
  private cancelButton: string;


  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private categoriaService: CategoriaService,
    public movimentoService: MovimentoService,

    private alertController: AlertController,
  ) { }


  ngOnInit() {
    this.movimento = this.navParams.data.appParam;
    this.movimentoFormModel = this.formBuilder.group({
      nome: [this.movimento.nome, Validators.compose([
        Validators.required
      ])],
      categoria: [this.movimento.categoria, Validators.compose([
        Validators.required
      ])],
      importo: [this.movimento.importo, Validators.compose([
        Validators.required
      ])],
      data: [this.movimento.data, Validators.compose([
        Validators.required
      ])]
    });

    this.categoriaService.list().subscribe((data:Array<Categoria>) => {
      this.categorie=data;
    });
  }


  async onSubmit() {
    this.movimento.nome = this.movimentoFormModel.value.nome;
    this.movimento.categoria = this.movimentoFormModel.value.categoria;
    this.movimento.importo = this.movimentoFormModel.value.importo;
    this.movimento.data = this.movimentoFormModel.value.data;
    await this.modalController.dismiss(this.movimento);
    
  }

  /*onDelete(movimento: Movimento){
    this.movimentoService.deleteMovimento(this.movimento).subscribe(()=>{
      this.navCtrl.pop();
    })
  }*/

  async onDelete(movimento: Movimento, sliding: IonItemSliding) {
    //sliding.close();
    const alert = await this.alertController.create({
      header: 'Elimina movimento',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.movimentoService.deleteMovimento(movimento).subscribe(()=>{
            console.log('movimento eliminato ');
            this.cancel();
            
          });
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('No Clicked ');

          }
        }
      ]
    });

    await alert.present();
  }



  async cancel() {
    await this.modalController.dismiss();
  }


  

  /* listCategorie(){
    console.log("Lista Categorie");
    this.categoriaService.list().subscribe((app: Array<Categoria>) =>{
      this.categorie = app;
    })
  }*/
}

/*
if(this.inserimento){
        this.movimentoService.createMovimento(this.movimento).subscribe(() =>{
          this.navCtrl.pop()
        });
      } else{
        this.movimentoService.updateMovimento(this.movimento).subscribe(() =>{
          this.navCtrl.pop();
        });
      }
*/