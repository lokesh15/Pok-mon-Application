export class PokemonHome {
    name: string;

    constructor(pokemon:any) {
      {
        this.name = pokemon.name || "";
      }
    }
  }


  export class Stats{
    base_stat:number;
    stat:{
      name:string;
    }
    constructor(stats:any){
      this.base_stat = stats.base_stat;
      this.stat ={
        name:stats.stat.name
      }
    }
  }
  export class Types{
    slot:number;
    type:{
      name:string;
    }
    constructor(types:any){
      this.slot = types.slot;
      this.type ={
        name:types.type.name
      }
    }
  }
  export class Abilities{
    slot:number;
    ability:{
      name:string;
    }
    constructor(abilities:any){
      this.slot = abilities.slot;
      this.ability ={
        name:abilities.ability.name
      }
    }
  }
  export class CurrentPokemonHome {
    name : string;
    stats:Stats[]; 
    types:Types[]; 
    abilities:Abilities[]; 
    constructor(currentPokemon:any) {
      {
        this.name = currentPokemon.name || "";
        this.stats = (currentPokemon.stats|| []).map(
          (data:any) => new Stats(data),
        ); //initializa a empty array
        this.types = (currentPokemon.types|| []).map(
          (data:any) => new Types(data),
        ); //initializa a empty array
        this.abilities = (currentPokemon.abilities|| []).map(
          (data:any) => new Abilities(data),
        ); //initializa a empty array
      }
    }
  
  }
  