import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela',
})
export class VuelaPipe implements PipeTransform {
  transform(valor: boolean): any {
    // if (valor) { esta es la forma antigua efectiva pero mas larga
    //   return (this.resultado = 'Puede volar'); esta es la forma antigua efectiva pero mas larga
    // } else { esta es la forma antigua efectiva pero mas larga
    //   return (this.resultado = 'No puede volar'); esta es la forma antigua efectiva pero mas larga
    // }

    // sintaxis ternarios: (condicion) ? resultado1 : resultado2
    //                                    if          else
    return valor ? 'vuela' : 'no vuela';
  }
}
