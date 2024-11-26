import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { toSignal } from "@angular/core/rxjs-interop";
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { PopularMovieI } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  http = inject(HttpClient);

  $popularMovies = toSignal(
    this.http.get<{ results: PopularMovieI[] }>(`${environment.baseUrl}/v1/movies/popular`, { withCredentials: true }).pipe(
      map(response => response.results || [])
    ),
    { initialValue: [] }
  );

  $nowPlayingMovies = toSignal(
    this.http.get<{ results: any[] }>(`${environment.baseUrl}/v1/movies/now_playing`, { withCredentials: true }).pipe(
      map(response => response.results || [])
    ),
    { initialValue: [] }
  );

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get<{ results: any[] }>(`${environment.baseUrl}/v1/movie/${movieId}`, { withCredentials: true }).pipe(
      map(response => response)
    );
  }

  $creditsMovies(movieId: number): Observable<any> {
    return this.http.get<{ results: any[] }>(`${environment.baseUrl}/v1/movie/${movieId}/credits`, { withCredentials: true }).pipe(
      map(response => response)
    );
  }
}
