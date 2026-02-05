import { Component } from '@angular/core';
import { NavbarComponent } from '../../partials/navbar/navbar';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-perfil-screen',
  standalone: true,
  imports: [NavbarComponent, RouterLink, MatIconModule],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss',
})
export class PerfilScreen {

}
