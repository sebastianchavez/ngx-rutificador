import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxRutificadorDirective } from './ngx-rutificador.directive';
import { NgxRutificadorPipe } from './ngx-rutificador.pipe';
import { NgxRutificadorComponent } from './ngx-rutificador.component';



@NgModule({
  imports: [
    NgxRutificadorComponent,
    NgxRutificadorDirective,
    NgxRutificadorPipe,
    CommonModule,
  ],
  exports: [
    NgxRutificadorComponent,
    NgxRutificadorDirective,
    NgxRutificadorPipe,
  ]
})
export class NgxRutificadorModule { }
