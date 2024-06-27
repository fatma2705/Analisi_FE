import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  authService = inject(AuthService);
  router = inject(Router);
  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}