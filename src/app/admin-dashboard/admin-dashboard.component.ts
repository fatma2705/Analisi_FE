import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  userName: string = '';

  constructor(private router: Router , private authService: AuthService) { }

   ngOnInit() {
    const userName = this.authService.getUserName();
    if (userName) {
      this.userName = userName.toUpperCase();
    }
  }


  goToUserManagement(): void {
    this.router.navigate(['/user-management']);
  }

  goToAnalysis(): void {
    this.router.navigate(['analysis/list']);
  }
}