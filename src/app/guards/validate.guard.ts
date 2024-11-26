import { CanActivateFn, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

export const unifiedAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const http = inject(HttpClient);

  return http.get(`${environment.baseUrl}/v1/auth/session`, { withCredentials: true }).pipe(
    map((response: any) => {
      if (response.authenticated) {
        if (state.url === '/') {
          return router.createUrlTree(['/main']);
        }
        return true;
      } else {
        if (state.url === '/') {
          return true;
        }
        return router.createUrlTree(['/']);
      }
    }),
    catchError(() => {
      if (state.url === '/') {
        return of(true);
      } else {
        return of(router.createUrlTree(['/']));
      }
    })
  );
};