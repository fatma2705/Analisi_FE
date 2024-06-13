import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Analysis } from '../models/analysis.model'; // Assicurati di avere un modello Analysis definito

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private apiUrl = 'http://localhost:8080/api/analisi';

  constructor(private http: HttpClient) { }

  getAllAnalisi(): Observable<Analysis[]> {
    return this.http.get<Analysis[]>(this.apiUrl);
  }


  getAnalisiById(id: number): Observable<Analysis>{
    return this.http.get<Analysis>(`${this.apiUrl}/${id}`);
  }

}
