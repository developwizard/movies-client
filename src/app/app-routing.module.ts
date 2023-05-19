import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CarouselComponent} from "./carousel/carousel.component";
import {TrailerComponent} from "./trailer/trailer.component";
import {GetMovieResolver} from "./resolver/get-movie-resolver";
import {GetMoviesResolver} from "./resolver/get-movies-list.resolver";
import {ReviewsComponent} from "./reviews/reviews.component";
import {GetReviewsListResolver} from "./resolver/get-reviews-list.resolver";

const routes: Routes = [
  {path: 'movies', component: CarouselComponent, resolve: {movies: GetMoviesResolver}},
  {path: 'trailer/:imdbId', component: TrailerComponent, resolve: {movie: GetMovieResolver}},
  {path: 'reviews/:imdbId', component: ReviewsComponent, resolve: {reviews: GetReviewsListResolver}},
  {path: '', redirectTo: 'movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
