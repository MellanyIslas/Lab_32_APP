// environment.ts
export const environment = {
  production: false,
  googleMapsApiKey: 'AIzaSyAXUD28efGEytPGIY4CV5f1txaEkyYRvr4'
};
// environment.prod.ts
export const environment = {
  production: true,
  googleMapsApiKey: 'AIzaSyAXUD28efGEytPGIY4CV5f1txaEkyYRvr4Í'
};
import { environment } from '../environments/environment';
import { environment } from '../environments/environment';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadGoogleMapsScript();
  }

  loadGoogleMapsScript(): void {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  initMap(): void {
    // Inicialización del mapa aquí
  }
}
