import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Categoria, SEGNO } from 'src/app/model/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CatUteService } from 'src/app/services/catUte.service';

@Component({
  selector: 'app-dettaglio-categoria',
  templateUrl: './dettaglio-categoria.page.html',
  styleUrls: ['./dettaglio-categoria.page.scss'],
})
export class DettaglioCategoriaPage implements OnInit {

  private categoria$: Observable<Categoria>;
  private categoria: Categoria;
  private categoriaFormModel: FormGroup;
  inserimento: boolean = false;
  private segno = SEGNO;



  constructor(private formBuilder: FormBuilder,
    private navParams: NavParams,
    private route: ActivatedRoute,
    private modalController: ModalController,
    public navCtrl: NavController,
    public catUteService: CatUteService,
    private categoriaService: CategoriaService) { }


  ngOnInit() {
    this.categoria = this.navParams.data.appParam;
    this.categoriaFormModel = this.formBuilder.group({
      nome: [this.categoria.nome, Validators.compose([
        Validators.required
      ])],
      segno: [this.categoria.segno, Validators.compose([
        Validators.required
      ])],
      budget: [this.categoria.budget, Validators.compose([
        Validators.required
      ])]
    });
    
  }

  async onSubmit() {
    this.categoria.nome = this.categoriaFormModel.value.nome;
    this.categoria.segno = this.categoriaFormModel.value.segno;
    this.categoria.budget = this.categoriaFormModel.value.budget;

    //controllo se la categoria esiste sul DB
    /*this.categoriaService.findByNome(this.categoria.nome).subscribe((data:Categoria)=>{
      if(!data){
        //se non esiste creo una nuova Categoria
        console.log("Categoria non esistente");
        this.categoriaService.createCategoria(this.categoria).subscribe(()=>{});
        //faccio di nuovo la query perchè non ho l'id della nuova categoria
        this.categoriaService.findByNome(this.categoria.nome).subscribe((data:Categoria)=>{
          this.categoria=data;
        });
      }
      else{
        console.log("Categoria esistente");
        this.categoria=data;
      }
    });*/
    await this.modalController.dismiss(this.categoria);
  }

  /*onDelete(){
    this.categoriaService.deleteCategoria(this.categoria).subscribe(()=>{
      this.navCtrl.pop();
    })
  }*/

  async cancel() {
    await this.modalController.dismiss();
  }
}
