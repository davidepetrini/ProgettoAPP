import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria.model';
import { Movimento } from 'src/app/model/movimento.model';
import { Utente } from 'src/app/model/utente.model';
import { MovimentoService } from 'src/app/services/movimento.service';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.page.html',
  styleUrls: ['./movimento.page.scss'],
})
export class MovimentoPage implements OnInit {
  private movimento$: Observable<Movimento>;

  private movimento: Movimento;
  private movimentoFormModel: FormGroup;
  categorie: Array<Categoria>;
  inserimento: boolean = false;


  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public movimentoService: MovimentoService
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
      ])]
    });
  }


  async onSubmit() {
    this.movimento.nome = this.movimentoFormModel.value.nome;
    this.movimento.categoria = this.movimentoFormModel.value.categoria;
    this.movimento.importo = this.movimentoFormModel.value.importo;
    await this.modalController.dismiss(this.movimento);
  }

  onDelete(){
    this.movimentoService.deleteMovimento(this.movimento).subscribe(()=>{
      this.navCtrl.pop();
    })
  }

  async cancel() {
    await this.modalController.dismiss();
  }
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