import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './component/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { CurrentPokemonComponent } from './component/current-pokemon/current-pokemon/current-pokemon.component';

const routes: Routes = [
  {path:'',redirectTo:'/pokemon-list', pathMatch:'full'},
  {path:'pokemon-list',component:PokemonListComponent},
  {path:'pokemon-details',component:PokemonDetailsComponent},
  {path:'current-pokemon',component:CurrentPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
