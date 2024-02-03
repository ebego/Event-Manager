import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:8081'; // Spring Boot API URL
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('token'));

  constructor(private http: HttpClient) {}

  get token(): string | null {
    return this.tokenSubject.value;
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/auth/login`, { username, password })
      .pipe(
        tap((response) => {
          const token = response.token;
          this.tokenSubject.next(token);
          localStorage.setItem('token', token);
        })
      );
  }

  logout(): void {
    this.tokenSubject.next(null);
    localStorage.removeItem('token');
  }
}
