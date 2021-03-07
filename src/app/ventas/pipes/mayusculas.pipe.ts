import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  // creo "MayusculasPipe" y le immplemento la interface "PipeTransform"
  transform(valor: string, valor2: boolean = true): string {
    //el valor2 por defecto sera true en caso de que no se pongan los parametros osea se use mayusculas por default
    // if (valor2) {
    //   return valor.toUpperCase();
    // } else {
    //   return valor.toLowerCase();
    // }
    return valor2 ? valor.toUpperCase() : valor.toLowerCase(); // esto es un ternario
  }
}
