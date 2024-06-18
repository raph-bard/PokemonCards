import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AttackModule } from './attack/attack.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { TypeModule } from './type/type.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AttackModule,
    PokemonModule,
    TypeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
