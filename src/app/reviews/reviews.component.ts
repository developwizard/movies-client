import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  standalone: true
})
export class ReviewsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      console.log(data['reviews']);
    });
  }
}
