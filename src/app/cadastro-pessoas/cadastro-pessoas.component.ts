import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PessoaService } from '../pessoa.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class CadastroPessoasComponent {
  cadastroForm: FormGroup;
  pessoas: any[] = [];
  editIndex: number | null = null;

  constructor(private fb: FormBuilder, private pessoaService: PessoaService, private router: Router) {
    this.cadastroForm = this.fb.group({
      cpf: ['', Validators.required],
      nome: ['', Validators.required],
      apelido: [''],
      dataNascimento: ['', Validators.required],
    });
  } 

    onSubmit() {
      if (this.cadastroForm.valid) {
        this.pessoaService.adicionarPessoa(this.cadastroForm.value);
        this.cadastroForm.reset(); 
      }
    }
    voltarHome() {
    this.router.navigate(['/home']);
  }

  irParaLista() {
    this.router.navigate(['/lista']);
  }
  }
  

