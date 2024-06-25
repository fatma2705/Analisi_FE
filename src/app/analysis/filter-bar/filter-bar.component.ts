import { Component, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Analysis } from '../../models/analysis.model';
import { Utente } from '../../models/utente.model';
import { TipoAnalisi } from '../../models/tipo-analisi.model';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {
   @Output() filter = new EventEmitter<any>();

  filterCriteria = {
    tipo: 'null', // Valore predefinito per "Tutti"
    esitoPositivo: 'null', // Valore predefinito per "Tutti"
    data: ''
  };

  tipiAnalisi = Object.values(TipoAnalisi);
; // Sostituisci con i tuoi tipi di analisi

  constructor() { }

  ngOnInit(): void {
  }

  applyFilters(): void {
    this.filter.emit(this.filterCriteria);
  }

}