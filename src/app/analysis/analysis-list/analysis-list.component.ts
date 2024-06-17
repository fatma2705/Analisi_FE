import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../analysis.service';
import { Analysis } from '../../models/analysis.model';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
    selector: 'app-analysis-list',
    standalone: true,
    templateUrl: './analysis-list.component.html',
    styleUrl: './analysis-list.component.css',
    imports: [NgFor, NavbarComponent]
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

}
