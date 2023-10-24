import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails:any;
  currentPokemonList:any;
  evolutionChainUrl:any;
  panelOpenState = false;
  evolutionDetail!:string;
  constructor(private service: ServiceService) {
      this.service.getCurrentPokemonData('pokemon-species/'+this.service.currentPokemonName).subscribe((res:any) =>{
        this.pokemonDetails = res;
        this.evolutionDetail = this.pokemonDetails?.evolves_from_species?.name
      })
      this.service.getCurrentPokemonData('pokemon/'+this.service.currentPokemonName).subscribe((res:any) =>{
        this.currentPokemonList = res;
              })
    
   }
  ngOnInit(): void {
  }

}
