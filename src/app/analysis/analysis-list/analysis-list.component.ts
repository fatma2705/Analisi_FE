import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../analysis.service';
import { Analysis } from '../../models/analysis.model';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-analysis-list',
    standalone: true,
    templateUrl: './analysis-list.component.html',
    styleUrl: './analysis-list.component.css',
    imports: [NgFor, NavbarComponent,MatIconModule,MatButtonModule,RouterLink]
})
export class AnalysisListComponent implements OnInit{

  analysis: Analysis[] = [];

  constructor(private analysisService:  AnalysisService) {}

  ngOnInit(): void {
   this.getAllAnalysis();
  }

  getAllAnalysis(): void{
    this.analysisService.getAllAnalisi().subscribe(
      (data: Analysis[]) => this.analysis = data,
      (error) => console.error(error)
    );
  }

  editAnalysis(analysis: Analysis) {
    console.log('Modifica', analysis);
    // Implementa la logica di modifica
  }

  viewDetails(analysis: Analysis) {
    console.log('Dettagli', analysis);
    // Implementa la logica di visualizzazione dettagli
  }

  deleteAnalysis(analysis: Analysis) {
    console.log('Elimina', analysis);
    // Implementa la logica di eliminazione
  }

  

}
