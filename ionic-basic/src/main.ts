import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading: boolean = false;

  startLoading() {
    // Mostrar el spinner
    this.loading = true;
    // Simular una carga
    setTimeout(() => {
      // Ocultar el spinner después de 5 segundos (simulación de carga)
      this.loading = false;
    }, 5000);
  }
}