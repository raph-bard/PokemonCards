import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PokemonModule { }
