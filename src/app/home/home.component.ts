import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  
})
export class HomeComponent implements OnInit {
  usuarioLogado: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    const currentUser = this.userService.getCurrentUser();
    this.usuarioLogado = currentUser ? currentUser.name : 'Usuário';
  }
  logout() {
    const confirmarSaida = window.confirm("Tem certeza que deseja sair?");
    if (confirmarSaida) {
      this.router.navigate(['/login']);
    }
}

  navigateToCadastro() {
    this.router.navigate(['/cadastro']); 
}

  navigateToLista() {
    this.router.navigate(['/lista']); 
}

  navigateToCadastroPessoas() {
    this.router.navigate(['/cadastro-pessoas']); 
}
}