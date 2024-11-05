import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'trabalho';
}

