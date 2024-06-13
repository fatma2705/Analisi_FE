import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalysisDetailComponent } from './analysis-detail/analysis-detail.component';  // Assicurati di avere un modello Analysis definito

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private apiUrl = 'http://your-api-url.com/api/analysis';