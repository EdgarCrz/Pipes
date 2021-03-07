import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api'; // es un modulo de primeNg

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = []; // declaro una variable de tipo interface "MenuItem" que es propio de primeNg
  // "items" es un arreglo y lo inicializamos vacio

  constructor() {}

  //lo metemos en el init ya que Init se ejecuta de inmediado al crear el elemento
  ngOnInit(): void {
    this.items = [
      //Empoezamos a llenar la propiedad
      {
        label: 'Pipes de angular', // esta etiqueta esta un nivel arriba que las de abajo
        icon: 'pi pi-desktop',
        items: [
          // los de abajo son items de Pipes Angular asi como en (bootstrap con list  group / list-group-item)
          {
            label: 'Textos y fechas', // se llena con una etiqueta "label" con su nombre
            icon: 'pi pi-align-left', // con un icono de la libreria de primeNg
            routerLink: '/', // y con la ruta a la que debe ir usando el routerlink para que la pagina no haga refresh
          },
          {
            label: 'Numeros', // se llena con una etiqueta "label" con su nombre
            icon: 'pi pi-dollar', // con un icono de la libreria de primeNg
            routerLink: 'numeros', // y con la ruta a la que debe ir usando el routerlink para que la pagina no haga refresh
          },
          {
            label: 'No-Comunes', // se llena con una etiqueta "label" con su nombre
            icon: 'pi pi-globe', // con un icono de la libreria de primeNg
            routerLink: 'no-comunes', // y con la ruta a la que debe ir usando el routerlink para que la pagina no haga refresh
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: ' pi pi-cog',
        routerLink: 'ordenar',
      },
    ];
  }
}
