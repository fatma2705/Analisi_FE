import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,MatIconModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
searchTerm: any;
  constructor(private router: Router){}

  searchQuery: string = '';

  onLogout() {
    console.log('Logout button clicked');
    this.router.navigate(['/home']);
  }

  search() {
    console.log('search');
  }
}


