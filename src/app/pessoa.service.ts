import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private pessoas: any[] = [];

  getPessoas() {
    return this.pessoas;
  }

  adicionarPessoa(pessoa: any) {
    this.pessoas.push(pessoa);
  }

  editarPessoa(index: number, pessoa: any) {
    this.pessoas[index] = pessoa;
  }

  deletarPessoa(index: number) {
    this.pessoas.splice(index, 1);
  }

  getPessoa(index: number) {
    return this.pessoas[index];
  }
}