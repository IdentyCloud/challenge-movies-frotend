import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { MUser } from '../models/user.model';

@Component({
  selector: 'app-auth',
  imports: [
    FormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.less'
})
export class AuthComponent {
  user = new MUser();

  constructor(private authService: AuthService, private router: Router) { }

  resetForm() {
    this.user = new MUser();
  }

  register() {
    const { firstName, lastName, email, password, birthdate } = this.user;

    this.authService.register(firstName, lastName, email, password, birthdate).subscribe({
      next: (resp) => {
        this.resetForm();
      },
      error: (err) => {
        console.error('Error Auth:', err.message || err);
      },
    });
  }

  login() {
    const { email, password } = this.user;

    this.authService.login(email, password).subscribe({
      next: (resp) => {
        this.router.navigate(['/main']);
        this.resetForm();
      },
      error: (err) => {
        console.error('Error Auth:', err.message || err);
      },
    });
  }
}
