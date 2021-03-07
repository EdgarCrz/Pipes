import { NgModule } from '@angular/core';

// primeng;
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset'; //este es el modulo para las cajas Fieldset, pero este modulo hace uso de un Modulo propio de angular por si solo no funcionara
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimeNgModule {}

// en este modulo se encuentran todas las importaciones de primeNg
//para despues poder ser utilizada en mis otros componentes y por eso es que estoy exportando esos modulos
//y asi englobarlos en la clase PrimeNgModule
