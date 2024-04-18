import { Pipe, PipeTransform } from '@angular/core';
import { NgxRutificadorService } from './ngx-rutificador.service';

@Pipe({
  name: 'fotmatRut',
  standalone: true,
})
export class NgxRutificadorPipe implements PipeTransform {

  constructor(
    private ngxRutificadorService: NgxRutificadorService
  ){}

  transform(value: string) {
    return this.ngxRutificadorService.formatRut(value) 
  }

}
