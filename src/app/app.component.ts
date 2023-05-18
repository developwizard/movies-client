import {Component, OnInit} from '@angular/core';
import {MoviesService} from "./service/movies.service";
import {Movie} from "./model/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies-client';
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getMovieList().subscribe((movies) => {
      this.movies = movies;
      movies.forEach(value => console.log(value));
    });
  }
}

