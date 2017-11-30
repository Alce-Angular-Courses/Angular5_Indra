import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {
  aDatos: Array<string>;

  constructor() {
    this.aDatos = [
      'Angular en 30 minutos',
      'Fundamentos de Angular',
      'Angular Avanzado',
      'Angular 5'
    ];
   }

  buscarMock(clave: string) {
    return this.aDatos;
  }

  buscarMockAsync(clave: string) {
    return new Promise((resolve, reject) => {
      setTimeout( () => {resolve(
        JSON.stringify(this.aDatos)); }, 2000);
    });
  }
}
