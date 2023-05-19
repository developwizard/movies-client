import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {Movie, Review} from "../model/models";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {ReviewService} from "../service/review.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
  ]
})
export class ReviewsComponent implements OnInit {
  movie: Movie = <Movie> {};
  reviews: string[] = [];
  review: string = '';

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) {
  }
  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.movie = data['movie'];
      this.reviews = this.movie.reviewIds.map((review: Review) => {
        return review.body;
      });
    });
  }

  onReviewSubmit(): void {
    this.reviewService.addReview(<Review> {id: this.movie.imdbId, body: this.review}).subscribe(() => {
      this.reviews.push(this.review);
      this.review = '';
    });
  }
}
