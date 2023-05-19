import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class HeaderComponent {

  constructor(private router: Router) {
  }

  onHomeClicked(): void {
    this.router.navigate(['/']);
  }

  onWatchListClicked(): void {

  }

  onLoginClicked(): void {

  }

  onRegisterClicked(): void {

  }
}
