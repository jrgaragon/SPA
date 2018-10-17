import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroeService: HeroesService) {
  }

  ngOnInit() {
    this.heroes = this._heroeService.getHeroes();
  }
}