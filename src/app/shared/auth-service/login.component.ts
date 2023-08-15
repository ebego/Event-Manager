import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login()">
      <input type="text" [(ngModel)]="username" [ngModelOptions]="{ standalone: true }" placeholder="Username" />
      <input type="password" [(ngModel)]="password" [ngModelOptions]="{ standalone: true }" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService , private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        // Successful login
        // Navigate to a protected route
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}
