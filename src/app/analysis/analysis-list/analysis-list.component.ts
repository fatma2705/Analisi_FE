import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../analysis.service';
import { Analysis } from '../../models/analysis.model';
import { NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-analysis-list',
  standalone: true,
  templateUrl: './analysis-list.component.html',
  styleUrl: './analysis-list.component.css',
  imports: [NgFor, NavbarComponent, MatIconModule, MatButtonModule, RouterLink, FilterBarComponent,NgIf]
})
export class AnalysisListComponent implements OnInit {

  analysis: Analysis[] = [];
  filteredAnalysis: Analysis[] = [];
  errorMessage: string | undefined;

  constructor(private analysisService: AnalysisService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getAllAnalysis();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  getAllAnalysis(): void {
    if (this.authService.isAdmin()) {
      this.analysisService.getAllPazientiAnalisi().subscribe(
        (data: Analysis[]) => {
          this.analysis = data;
        },
        (error: string) => {
          this.errorMessage = error;
          console.error('Errore:', error);
        }
      );
    } else {
      this.analysisService.getAllAnalisi().subscribe(
        (data: Analysis[]) => this.analysis = data,
        (error) => console.error(error)
      );
    }
  }

  filterAnalysis(example: Analysis): void {
    this.analysisService.searchAnalisi(example).subscribe(
      (data: Analysis[]) => this.analysis = data,
      (error) => console.error(error)
    );
  }

  applyFilter(filterCriteria: any): void {
    // Creazione di un oggetto Analysis con i criteri di filtro
    const example: Analysis = {
      id: 0,
      esitoPositivo: filterCriteria.esitoPositivo !== 'null' ? filterCriteria.esitoPositivo === 'true' : null,
      tipo: filterCriteria.tipo !== 'null' ? filterCriteria.tipo : null,
      data: filterCriteria.data || null,
    };

    this.filterAnalysis(example);
  }



}
