import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[], ordenarPor: string = 'sin valor'): Heroe[] {
    // sort: Función utilizada para determinar el orden de los elementos. Se espera que devuelva un valor negativo si el primer argumento es menor que el segundo, cero si son iguales y un valor positivo en caso contrario. Si se omite, los elementos se ordenan en orden ascendente de caracteres ASCII.

    switch (ordenarPor) {
      case 'nombre':
        return heroes.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));

      case 'vuela':
        return heroes.sort((a, b) => (a.vuela > b.vuela ? -1 : 1));

      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));

      default:
        return heroes;
    }
  }
  // esta era a la antiguita
  // if (ordenarPor === 'sin valor') {
  //   return heroes;
  // } else {
  //   heroes = heroes.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
  // }
  // return heroes;
}
