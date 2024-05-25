// storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Método para guardar un usuario en el almacenamiento local
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Método para obtener un usuario del almacenamiento local
  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Método para eliminar un usuario del almacenamiento local
  removeUser() {
    localStorage.removeItem('user');
  }

  // Método para limpiar completamente el almacenamiento local
  clearStorage() {
    localStorage.clear();
  }
}
// auth.service.ts
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }

  login(username: string, password: string) {
    // Lógica de autenticación...
    const user = { username: username, token: 'dummytoken' }; // Supongamos que obtienes un usuario desde el servidor
    this.storageService.setUser(user); // Guardar el usuario en el almacenamiento local
  }

  logout() {
    this.storageService.removeUser(); // Borrar el usuario del almacenamiento local al cerrar sesión
  }
}
// auth.service.ts
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }

  login(username: string, password: string) {
    // Lógica de autenticación...
    const user = { username: username, token: 'dummytoken' }; // Supongamos que obtienes un usuario desde el servidor
    this.storageService.setUser(user); // Guardar el usuario en el almacenamiento local
  }

  logout() {
    this.storageService.clearStorage(); // Limpiar completamente el almacenamiento local al cerrar sesión
  }
}