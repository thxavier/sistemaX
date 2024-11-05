import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule,  CommonModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  loginFailed: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    const { name, password } = this.loginForm.value;
    if (this.userService.validateUser(name, password)) {
      this.router.navigate(['/home']);
    } else {
      this.loginFailed = true;
      this.loginForm.reset();
    }
  }
  goToCadastro() {
    this.router.navigate(['/cadastro']); 
  }
}
