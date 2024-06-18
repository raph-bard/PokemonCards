import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  BASE_URL: string = "http://localhost:8080";
  CATEGORY_TABLE: string = "/pokemon";

  http = inject(HttpClient);

  getAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.BASE_URL}${this.CATEGORY_TABLE}/get/all`);
  }
  getBy(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.BASE_URL}${this.CATEGORY_TABLE}/get/${id}`);
    
  }
}
