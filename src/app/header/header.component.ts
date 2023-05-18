import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

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

  onHomeClicked(): void {

  }

  onWatchListClicked(): void {

  }

  onLoginClicked(): void {

  }

  onRegisterClicked(): void {

  }
}
