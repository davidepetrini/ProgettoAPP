import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Utente} from '../../model/utente.model';
import {UtenteService} from '../../services/utente.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  private utente$: BehaviorSubject<Utente>;

  constructor(private utenteService: UtenteService) { }

  ngOnInit() {
    this.utente$ = this.utenteService.getUtente();
  }

}
