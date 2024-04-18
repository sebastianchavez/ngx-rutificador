import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxRutificadorService } from './ngx-rutificador.service';
import { NgxRutificadorDirective } from './ngx-rutificador.directive';

@Component({
  selector: 'input-rut',
  standalone: true,
  imports: [NgxRutificadorDirective],
  templateUrl: './ngx-rutificador.component.html',
  styleUrl: './ngx-rutificador.component.css'
})
export class NgxRutificadorComponent {

  @Input() class: string = ''
  @Input() style: string = ''
  @Input() placeholder: string = ''
  @Output() isValidRut: EventEmitter<boolean> = new EventEmitter(false)

  constructor(
    private ngxRutificadorService: NgxRutificadorService,
  ){}


  validateRut(ev:any){    
    const isValid = this.ngxRutificadorService.validateRut(ev.target.value)
    this.isValidRut.emit(isValid)
  }
}
