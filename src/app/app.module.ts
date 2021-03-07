import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // este modulo es para que en conjunto con el primeNG funcione el Fieldset

import { AppComponent } from './app.component';

//modulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import localeEs from '@angular/common/locales/es-MX'; //creamos el nombre de esta importacion y le cargamos el formato del pais especifico que necesitamos, ahora "localEs" tendra el formato deseado
import localeFr from '@angular/common/locales/fr'; //creamos el nombre de esta importacion y le cargamos el formato del pais especifico que necesitamos, ahora "localEs" tendra el formato deseado

import { registerLocaleData } from '@angular/common'; //esta es la funcion que ajustara la data a la region que le indiquemos nosotros

registerLocaleData(localeEs); // empleamos la funcion  y le pasamos como parametro "localEs" que esta cargada con la region de español México
registerLocaleData(localeFr); // empleamos la funcion  y le pasamos como parametro "localEs" que esta cargada con la region de español México

//Cambiar el locale de la app

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule, // este modulo es para la animacion ripple
  ], //importo el modulo que esta donde estan los componentes reutilizables como sidebars menus, footers
  // useValue: usa el valor de 'es-MX--- ESTO DE PROVIDERS es para implementarlo de manera global en toda la aplicación
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }], //LOCALE_ID: Proporcione este token para establecer la configuración regional de su aplicación. Se utiliza para la extracción i18n, por tuberías i18n (DatePipe, I18nPluralPipe, CurrencyPipe, DecimalPipe y PercentPipe) y por expresiones ICU.
  bootstrap: [AppComponent],
})
export class AppModule {}
