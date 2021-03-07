import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Edgar';
  genero: string = 'masculino';

  invitacionMap = {
    maculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Joaquin', 'Rodrigo'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': `tenemos un cliente esperando`,
    // other: `tenemos ${this.clientes.length} clientes esperando`, esto es lo que hubiera echo yo
    other: `tenemos # clientes esperando`, // esta opcion nos permite solo poner el # para representar lacantidaden el array
  };

  cambiarCliente() {
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.shift();
  }

  //keyValue Pipe

  persona = {
    nombre: 'Edgar',
    edad: 25,
    direccion: 'Cdmx, México',
  };

  heroes = [
    { nombre: 'superman', vuela: true },
    {
      nombre: 'robin',
      vuela: false,
    },
    {
      nombre: 'acuaman',
      vuela: false,
    },
  ];
  //  interval:
  // Crea un Observable que emite números secuenciales cada intervalo de tiempo especificado, en un {@link SchedulerLike} especificado.

  // Emite números incrementales periódicamente en el tiempo.
  // y es un elemento observable(osea que puedo acceder desde otro lado y ver que ocurre en el)
  miObservable = interval(5000);
  //recordatorio: una promesa tiene dos parametros uno por si se logra lo esperado y otro por si falla
  valorPromesa = new Promise((resolve, reject) => {
    // es una funcion
    setTimeout(() => {
      // este es una funcion timer es como un if de tiempo
      resolve('Tenemos data de promesa');
    }, 3500); //este es el tiempo en cuanto pase se ejecutara lo de arria
  });
}
