import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    const data = { email, password };
    return this.http
      .post<any>(`${environment.baseUrl}/v1/auth/login`, data, { withCredentials: true })
      .pipe(
        map((resp) => {
          return resp;
        }),
        catchError((err) => {
          return throwError(() => err);
        })
      );
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    birthdate: Date
  ): Observable<boolean> {
    const data = { firstName, lastName, email, password, birthdate };
    return this.http
      .post<any>(`${environment.baseUrl}/v1/auth/register`, data)
      .pipe(
        map((resp) => {
          return resp;
        }),
        catchError((err) => {
          return throwError(() => err);
        })
      );
  }
}
