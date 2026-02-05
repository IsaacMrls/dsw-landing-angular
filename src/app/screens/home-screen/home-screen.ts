import { Component } from '@angular/core';
import { NavbarComponent } from '../../partials/navbar/navbar';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [NavbarComponent, RouterLink, MatIconModule],
  templateUrl: './home-screen.html',
  styleUrls: ['./home-screen.scss'],
})
export class HomeScreen {

}
