import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-pessoas', component: CadastroPessoasComponent },
];

