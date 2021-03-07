import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent {
  enMayusculas: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
  ];

  cambiar() {
    //  this.enMayusculas = false;  yo lo habia echo asi, solo que solo cambia una vez y ya en cambio la de abajo siempre va a invertir el valor cuantas veces quiera de true a false y de false a true
    this.enMayusculas = !this.enMayusculas; // "enMayusculas" es igual al valor opuesto de "enMayusculas"
  }

  cambiarOrden(valor: string) {
    // esta funcion lo unico que va a hacer es cambiar el valor que nos esta mandando cada boton
    this.ordenarPor = valor;
  }
}
