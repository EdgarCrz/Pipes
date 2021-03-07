import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  nombreLower: string = 'edgar';
  nombreUpper: string = 'EDGAR';
  nombreCompleto: string = 'edGaR cRuZ';

  fecha: Date = new Date(); // facha de hoy
}
