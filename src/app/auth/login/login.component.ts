import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NavbarComponent, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';

  authService = inject(AuthService);
  router = inject(Router);

  protected loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        if (this.authService.isLoggedIn()) {
          this.router.navigate(['/analysis/list']);
        }
        console.log(data);
      },
      error: (err: any) => {
        this.errorMessage = (err.error && err.error.message) ? err.error.message : 'Credenziali di accesso errate';
        console.error(this.errorMessage);
      }
    });
  }
}


}
