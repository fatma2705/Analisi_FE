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
      console.log('ggggggg');
    const userName = this.authService.getUserName();
    console.log('username dentro home ' + userName);
    if (userName) {
      this.userName = userName.toUpperCase();
    }
  }

  onClickButton1() {
    // Gestisci l'azione del primo bottone
    console.log('Button 1 clicked');
  }


}

