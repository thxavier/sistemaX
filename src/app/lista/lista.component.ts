import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { PessoaService } from '../pessoa.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ListaComponent implements OnInit {
  usuarioLogado: string | null = null;
  pessoas: any[] = []; 

  constructor(
    private userService: UserService,
    private pessoaService: PessoaService, 
    private router: Router
  ) {}

  ngOnInit() {
    const currentUser = this.userService.getCurrentUser();
    this.usuarioLogado = currentUser ? currentUser.name : 'Usuário';

    
    this.pessoas = this.pessoaService.getPessoas();
  }

  voltarHome() {
    this.router.navigate(['/home']);
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro-pessoas']); 
  }
}