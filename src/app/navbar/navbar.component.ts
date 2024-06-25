import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatIconModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchTerm: any;
  searchData: any;
  searchEsitoPositivo: any;
  searchTipo: any;
  constructor(private router: Router, private location: Location, private authService: AuthService) { }

  searchQuery: string = '';
  userName: string = ''; // Modifica con il metodo per ottenere il nome dell'utente

  ngOnInit() {
    const userName = this.authService.getUserName();
    if (userName) {
      this.userName = userName.toUpperCase();
    }
  }

  goBack(): void {
    this.location.back();
  }





  onLogout() {
    console.log('Logout button clicked');
    this.router.navigate(['/home']);
  }

  search() {
    console.log('search');
  }
}


