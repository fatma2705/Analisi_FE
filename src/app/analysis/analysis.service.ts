import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Analysis } from '../models/analysis.model';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private apiUrl = 'http://localhost:8080/api/analisi';

  constructor(private http: HttpClient) { }

  getAllAnalisi(): Observable<Analysis[]> {
    return this.http.get<Analysis[]>(this.apiUrl);
  }

  getAnalisiById(id: string): Observable<Analysis> {
    return this.http.get<Analysis>(`${this.apiUrl}/${id}`);
  }

  updateAnalisi(analisi: Analysis){
    return this.http.put<Analysis>(this.apiUrl,analisi);
  }

  deleteAnalisi(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchAnalisi(example: Analysis): Observable<Analysis[]> {
    const url = `${this.apiUrl}/search`;
    return this.http.post<Analysis[]>(url, example);
  }

}
