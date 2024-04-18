import { Directive, EventEmitter, Output } from '@angular/core';
import { NgxRutificadorService } from './ngx-rutificador.service';

@Directive({
  selector: '[ngxRutificador]',
  standalone: true,
  host: {
    '(input)': 'onChange($event)',
    '(blur)': 'onBlur($event)',
    '(focus)': 'onFocus($event)',
  }
})
export class NgxRutificadorDirective {
  @Output() public valueChange: EventEmitter<any>

  constructor(
    private ngxRutificadorService: NgxRutificadorService
  ) { 
    this.valueChange = new EventEmitter()    
  }

  public onFocus(ev: Event){
    const htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    htmlInputElement.value = this.ngxRutificadorService.cleanRut(htmlInputElement.value.trim())
    this.valueChange.emit(htmlInputElement.value)
  }

  public onBlur(ev: Event){
    const htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    htmlInputElement.value = this.ngxRutificadorService.formatRut(htmlInputElement.value.trim())
    this.valueChange.emit(htmlInputElement.value)
  }

  public onChange(ev: Event){
    const htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    htmlInputElement.value = this.ngxRutificadorService.cleanRut(htmlInputElement.value.trim())
    this.valueChange.emit(htmlInputElement.value)
  }

}
