import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-analysis-home',
  standalone: true,
  imports: [],
  templateUrl: './analysis-home.component.html',
  styleUrl: './analysis-home.component.css'
})
export class AnalysisHomeComponent {

    userName: string = 'ospite';

constructor(private router: Router, private authService: AuthService) { }


    
    ngOnInit() {
    const userName = this.authService.getUserName();
    if (userName) {
      this.userName = userName.toUpperCase();
    }
  }

  onClickButton1() {
    console.log('Button 1 clicked');
     if (this.authService.isLoggedIn()) {
          this.router.navigate(['/analysis/list']);
        }
    
  }


}

