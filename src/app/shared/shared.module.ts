import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [CommonModule, PrimeNgModule],
})
export class SharedModule {}

//estoy importando primeNg para poder distribuir los componentes en todos los componentes  a este nivel de carpeta(osea todo lo que esta en el shared)
