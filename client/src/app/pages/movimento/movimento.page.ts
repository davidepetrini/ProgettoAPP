import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria.model';
import { Movimento } from 'src/app/model/movimento.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MovimentoService } from 'src/app/services/movimento.service';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.page.html',
  styleUrls: ['./movimento.page.scss'],
})
export class MovimentoPage implements OnInit {

  movimento = new Movimento();
  categorie: Array<Categoria>;
  inserimento: boolean = false;


  constructor(
    private navCtrl: NavController,
    //private navParams: NavParams,
    private categoriaService :CategoriaService,
    private movimentoService: MovimentoService,
  ) { }

  ngOnInit(){
    //this.movimento =this.navParams.get("movimento");

    //flag for insert or create
    //this.inserimento = this.navParams.get("inserimento");
   
    //get category array to display
    this.categoriaService.list().subscribe((data:Array<Categoria>) =>{
      this.categorie = data;})
  

  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log(this.movimento.categoria.segno);
      //Setto importo negativo per le uscite
      if(this.movimento.categoria.segno == "USCITA"){
        this.movimento.importo *= -1;
      }
      console.log(this.movimento.importo);
      /*if(this.inserimento){
        this.movimentoService.createMovimento(this.movimento).subscribe(() =>{
          this.navCtrl.pop()
        });
      } else{
        this.movimentoService.updateMovimento(this.movimento).subscribe(() =>{
          this.navCtrl.pop();
        });
      }*/
    }
  }

  onDelete(){
    this.movimentoService.deleteMovimento(this.movimento).subscribe(()=>{
      this.navCtrl.pop();
    })
  }


/*  ngOnInit() {
    this.movimento = this.navParams.data.appParam;
    this.movimentoFormModel = this.formBuilder.group({
      categoria: [this.movimento.categoria, Validators.compose([
        Validators.required
      ])],
      importo: [this.movimento.importo, Validators.compose([
        Validators.required
      ])]
    });
  }*/



  /*
  ngOnInit() {
    console.log('ngOnInit MovimentoPage');
    this.movimento = this.navParams.get("movimento");
    //flag for insert or create
    //this.inserimento = this.navParams.get("inserimento");
    //get category array to display
    this.categoriaService.list().subscribe((data:Array<Categoria>) =>{
      this.categorie = data;})
    
    }*/



/*
  async onSubmit() {
    this.movimento.categoria = this.movimentoFormModel.value.categoria;
    this.movimento.importo = this.movimentoFormModel.value.importo;
    await this.modalController.dismiss(this.movimento);
  }
  async onDelete() {
    await this.modalController.dismiss();
  }
*/




  /*   
  
  private formBuilder: FormBuilder,
    private modalController: ModalController,
    private navParams: NavParams
    
    ngOnInit() {
       this.movimento = this.navParams.data.appParam;
       this.movimentoFormModel = this.formBuilder.group({
         descrizione: [this.movimento.descrizione, Validators.compose([
           Validators.required
         ])],
         tipologiaEsame: [this.movimento.tipologiaEsame, Validators.compose([
           Validators.required
         ])],
         dataAppello: [this.movimento.dataAppello, Validators.compose([
           Validators.required
         ])]
       });
     }
 */


}



/*
export class MovimentoPage {

  movimento = new Movimento();
  categorie: Array<Categoria>;
  inserimento: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public movimentoService: MovimentoService,
              public categoriaService :CategoriaService,public utenteService: UtenteService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovimentoPage');
    this.movimento =this.navParams.get("movimento");
    //flag for insert or create
    this.inserimento = this.navParams.get("inserimento");
    //get category array to display
    this.categoriaService.list().subscribe((data:Array<Categoria>) =>{
      this.categorie=data;})
    //get current family
    this.utenteService.getUtente().subscribe((data:Utente) =>{
      this.movimento.famiglia=data.famiglia;
      })
    }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log(this.movimento.categoria.segno);
      //Setto importo negativo per le uscite
      if(this.movimento.categoria.segno == "USCITA"){
        this.movimento.importo *= -1;
      }
      console.log(this.movimento.importo);
      if(this.inserimento){
        this.movimentoService.createMovimento(this.movimento).subscribe(() =>{
          this.navCtrl.pop()
        });
      } else{
        this.movimentoService.updateMovimento(this.movimento).subscribe(() =>{
          this.navCtrl.pop();
        });
      }
    }
  }
  onDelete(){
    this.movimentoService.deleteMovimento(this.movimento).subscribe(()=>{
      this.navCtrl.pop();
    })
  }
}


*/