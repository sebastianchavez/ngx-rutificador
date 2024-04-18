import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxRutificadorDirective } from './ngx-rutificador.directive';
import { NgxRutificadorPipe } from './ngx-rutificador.pipe';



@NgModule({
  imports: [
    NgxRutificadorDirective,
    NgxRutificadorPipe,
    CommonModule,
  ],
  exports: [
    NgxRutificadorDirective,
    NgxRutificadorPipe,
  ]
})
export class NgxRutificadorModule { }
