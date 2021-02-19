import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-dettaglio-categoria',
  templateUrl: './dettaglio-categoria.page.html',
  styleUrls: ['./dettaglio-categoria.page.scss'],
})
export class DettaglioCategoriaPage implements OnInit {

  private categoria$: Observable<Categoria>;

  constructor(private route: ActivatedRoute,
              private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoria$ = this.categoriaService.findById(parseInt(params.get('id'), 0));
    });
  }

}
