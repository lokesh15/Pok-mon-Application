import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { DataSource } from "@angular/cdk/collections";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, fromEvent, merge, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { CurrentPokemonHome, PokemonHome } from './pokemon-list.model';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  displayedColumns = [
    "name",
    "actions"
  ];
  exampleDatabase: ServiceService | any;
  dataSource: any| null = new MatTableDataSource();
  pokemonList: PokemonHome | any;
  selection = new SelectionModel<PokemonHome>(true, []);
  dialogData: any;
  currentPokemonList : CurrentPokemonHome | any ;
  constructor(private service: ServiceService,public httpClient: HttpClient,
    private snackBar: MatSnackBar,private dialog: MatDialog,private router: Router) { }
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort!: MatSort;
    @ViewChild("filter", { static: true }) filter!: ElementRef;
  ngOnInit(): void {
    this.pokemonDetails()
  }
  refresh() {
    this.pokemonDetails();
  }
pokemonDetails(){
  this.service.getData('pokemon?limit=100000&offset=0').subscribe((res:any) =>{
    console.log('res',res);
    this.dataSource = new MatTableDataSource(res.results);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  },
  err =>{
    console.log('err',err);
  })
}
currentPokemonDetails(data:any) {
  this.service.currentPokemonName = data.name
  this.router.navigateByUrl('/current-pokemon')
}
showDetails(data:any){
  this.service.currentPokemonName = data.name
  this.router.navigateByUrl('/pokemon-details')
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
