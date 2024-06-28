import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Analysis } from '../models/analysis.model';
import { AuthService } from '../auth/auth.service';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private apiUrl = 'http://localhost:8080/api/analisi';

  constructor(private http: HttpClient, private authService: AuthService) { }

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


  addAnalisi(example: Analysis){
    return this.http.post<Analysis>(this.apiUrl,example);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Errore client-side o di rete
      errorMessage = `Errore: ${error.error.message}`;
    } else {
      // Errore server-side
      errorMessage = `Codice errore: ${error.status}\nMessaggio: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getAllPazientiAnalisi(): Observable<Analysis[]> {
    if (this.authService.isAdmin()) {
      return this.http.get<Analysis[]>(`${this.apiUrl}/listAll`).pipe(
        catchError(this.handleError)
      );
    } else {
      return throwError(new Error('Non sei autorizzato ad accedere a questa risorsa.'));
    }
  }






}
