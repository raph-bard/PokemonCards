import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../shared/pokemon';
import { PokemonService } from '../shared/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {

  pokemonId : number = 1;
  pokemon$!: Observable<Pokemon>;

  service = inject(PokemonService);

  ngOnInit(): void {
    this.pokemon$ = this.service.getBy(this.pokemonId);
  }
}
