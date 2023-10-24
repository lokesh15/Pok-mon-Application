import { Component, OnInit ,Inject} from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { CurrentPokemonHome } from '../../pokemon-list/pokemon-list.model';

@Component({
  selector: 'app-current-pokemon',
  templateUrl: './current-pokemon.component.html',
  styleUrls: ['./current-pokemon.component.scss']
})
export class CurrentPokemonComponent implements OnInit {
  currentPokemonName!:string;
  currentPokemonList!:CurrentPokemonHome;
  panelOpenState = false;
  constructor(
    private service: ServiceService) {
        this.service.getCurrentPokemonData('pokemon/'+this.service.currentPokemonName).subscribe((res:any) =>{
          this.currentPokemonList = res;
          console.log('currentPokemonDetails',this.currentPokemonList);
        })
      
     }
  ngOnInit(): void {
  }
}
