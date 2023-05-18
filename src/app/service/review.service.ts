import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Review} from "../model/models";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://localhost:8080/api/v1/reviews';

  constructor(private http: HttpClient) {
  }

  addReview(review: Review) {
    return this.http.post<Review>(this.baseUrl, review);
  }
}
