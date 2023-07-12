import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string

  constructor(private http: HttpClient) {}

  submitForm() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      password: this.password
    };

    this.http.post('/bookings/add', user).subscribe(
      response => {
        // Handle success response
        console.log('User registration successful!');
      },
      error => {
        // Handle error response
        console.error('Error occurred during user registration:', error);
      }
    );
  }
}
