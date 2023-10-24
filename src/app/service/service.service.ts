import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentPokemonHome, PokemonHome } from '../component/pokemon-list/pokemon-list.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  uri = environment.apiUrl;
  pokemonList: any = [];
  currentPokemonName :any;
  constructor(private httpClient: HttpClient) {

  }
  getData(endPoint:any): Observable<PokemonHome[]> {
    return this.httpClient.get<PokemonHome[]>(this.uri + endPoint);
  }
  getCurrentPokemonData(endPoint:any): Observable<CurrentPokemonHome[]> {
    return this.httpClient.get<CurrentPokemonHome[]>(this.uri + endPoint);
  }
  getEvolutionChain(endPoint:any): Observable<any> {
    return this.httpClient.get(endPoint);
  }
}
