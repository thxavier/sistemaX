import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  cadastrar() {
    if (this.cadastroForm.valid) {
      const { nome, password } = this.cadastroForm.value;
      this.userService.addUser({ name: nome, password });
      alert('Usuário cadastrado com sucesso!');
      this.cadastroForm.reset();
      this.router.navigate(['/login']);
    } else {
      alert('Formulário inválido. Verifique os dados e tente novamente.');
    }
  }
}