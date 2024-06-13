import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../analysis.service';
import { Analysis } from '../../models/analysis.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-analysis-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './analysis-list.component.html',
  styleUrl: './analysis-list.component.css'
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
