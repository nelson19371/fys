import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importa DomSanitizer

@Component({
  selector: 'app-root',
  standalone: true,  // Marca el componente como standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alerta = {
    "lat": "-23.749273",
    "lng": "-70.108439",
    "mapa": "https://maps.google.com/?t=h&q=-23.749273,-70.108439",
    "patente": "RBXB38",
    "tipo_alerta": "Fatiga y Somnolencia",
    "detalle_alerta": "Conductor Bostezando",
    "fecha": "03-09-2024 12:42:58",
    "nombre_contacto": "John Connor",
    "nombre_responsable": "Sin Asignar",
    "cargo_responsable": "",
    "empresa": "INGENIERIA ERR SPA",
    "estado": "Por Gestionar"
  };

  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Genera la URL segura para Google Maps utilizando las coordenadas del objeto 'alerta'
    this.mapUrl = this.getSafeUrl(this.alerta.lat, this.alerta.lng);
  }

  getSafeUrl(lat: string, lng: string): SafeResourceUrl {
    // Construye la URL y la marca como segura usando DomSanitizer
    const url = `https://maps.google.com/?t=h&q=${lat},${lng}&z=10&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
