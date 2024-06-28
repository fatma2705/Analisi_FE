import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Utente } from '../models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/utente';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllUtenti(): Observable<Utente[]>{
    return this.http.get<Utente[]>(this.baseUrl);
  }
}
