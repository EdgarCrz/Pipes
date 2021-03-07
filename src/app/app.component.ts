import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'; //esto es un componente propio de primeNG

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private primeNGConfig: PrimeNGConfig) {} // Inyecto mi servicio de tipo PrimeNGConfig
  ngOnInit() {
    this.primeNGConfig.ripple = true; //utilizo la propiedad del servicio que inyecte y le asigno un valor true
  }
}
