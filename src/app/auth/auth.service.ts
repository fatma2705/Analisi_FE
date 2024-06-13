import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:8080/api/auth';

  register(data: any){
    return this.httpClient.post(`${this.baseUrl}/register`, data);
  }

  login(data: any){
    return this.httpClient.post(`${this.baseUrl}/login`, data)
    .pipe(tap((result) => {
      localStorage.setItem('authUser', JSON.stringify(result));
    }));
  }

  logout(){
    localStorage.removeItem('authUser');
  }

  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }

  private handleError(error: any): Observable<never> {
  let errorMessage = 'Errore di autenticazione';
  if (error.error instanceof ErrorEvent) {
    // Errore client-side
    errorMessage = `Errore: ${error.error.message}`;
  } else if (error.error && error.error.message) {
    // Errore server-side con messaggio specifico
    errorMessage = error.error.message;
  }
  console.error('An error occurred:', errorMessage);
  return throwError(() => new Error(errorMessage));
}

isAdmin(): boolean {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return user.role === 'admin';
}

}
