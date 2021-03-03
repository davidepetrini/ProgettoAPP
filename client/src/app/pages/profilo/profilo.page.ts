import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lingua, LinguaService } from '../../services/lingua.service';
import { UtenteService } from '../../services/utente.service';
import { BehaviorSubject } from 'rxjs';
import { Utente } from '../../model/utente.model';
import { NavController, NavParams, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],
})
export class ProfiloPage implements OnInit {
  private utente$: BehaviorSubject<Utente>;


  private utente: Utente;
  private profiloFormModel: FormGroup;
  private lingue: Lingua[];


  constructor(private formBuilder: FormBuilder,

    private linguaService: LinguaService,
    private utenteService: UtenteService,
    private translateService: TranslateService,
    private navController: NavController,
  ) { }
  ngOnInit() {
    this.lingue = this.linguaService.getLingue();
    this.profiloFormModel = this.formBuilder.group({
      

      username: ['', Validators.compose([
        Validators.required
      ])],
      linguaPreferita: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.linguaService.getLinguaAttuale().subscribe((lingua) => {
      this.profiloFormModel.patchValue({ linguaPreferita: lingua });
    });
    this.utenteService.getUtente().subscribe((utente) => {
      this.profiloFormModel.patchValue({username: utente.username});
      this.utente = utente;
    });
  }


  onSubmit(): void {
    this.translateService.use(this.profiloFormModel.value.linguaPreferita);
    this.linguaService.updateLingua(this.profiloFormModel.value.linguaPreferita);
    this.utente.username = this.profiloFormModel.value.username;
    this.utenteService.updateProfilo(this.utente).subscribe((nuovoUtente: Utente) => {
      this.navController.back();
    });
  }

  cancel() {
    this.navController.back();
  }

  /*ngOnInit() {
    this.utente = this.navParams.data.appParam;
    this.profiloFormModel = this.formBuilder.group({
      nome: [this.utente.nome, Validators.compose([
        Validators.required
      ])],
      cognome: [this.utente.cognome, Validators.compose([
        Validators.required
      ])],
      
    });
    
  }*/

}