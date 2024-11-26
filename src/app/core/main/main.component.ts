import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-main',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less'
})
export class MainComponent {
  $popular = inject(MovieService).$popularMovies;
  $nowPlaying = inject(MovieService).$nowPlayingMovies;
  $credits = signal<any[]>([]);

  selectedMovieCredits: any = null;
  selectedMovieDetails: any = null;

  private movieService = inject(MovieService);

  handleMovieClick(movieId: number): void {

    this.movieService.getMovieDetails(movieId).subscribe(details => {
      this.selectedMovieDetails = details;
    });

    this.movieService.$creditsMovies(movieId).subscribe(credits => {
      this.$credits.set(credits);
      this.selectedMovieCredits = credits;
    });
  }
}
