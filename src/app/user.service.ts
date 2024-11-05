import { Injectable } from '@angular/core';

interface User {
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = []; 
  private currentUser: User | null = null;
  
  addUser(user: User) {
    this.users.push(user);
  }
  
  validateUser(name: string, password: string): boolean {
    const user = this.users.find(u => u.name === name && u.password === password);
    if (user) {
      this.currentUser = user; // Armazena o usuário logado
      return true;
    }
    return false;
  }
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  getUsers() {
    return this.users;
  }

}

