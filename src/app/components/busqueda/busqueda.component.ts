import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private activateRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroe(params['criteria']);
    });
  }

  verHeroe(id: number) {
    this.router.navigate(['/heroe', id]);
  }

}
