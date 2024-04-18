# NgxRutificador

Angular Rutificador


## Instalación

```
npm i ngx-rutificador
```


## Uso

```
import { NgxRutificadorModule } from 'ngx-rutificador'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxRutificadorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
```


## Pipe value formato rut


```
{{'123123123' | fotmatRut}}
```


## Directive input formato rut

```
<input type="text" ngxRutificador>
```


## Component input validación rut

Códiogo TS
```
export class AppComponent {
  isValid: boolean = false;
}
```

Código HTML
```
<input-rut (isValidRut)="isValid=$event" ></input-rut>
{{isValid}}
```


## Propiedades
| Nombre  | Descripción |
| :------------ |:---------------|
| placeholder      | Texto instructivo que se muestra antes de que la entrada tenga un valor. |
| style      | Estilos de CSS |
| class | Clase de CSS (declarada en style.css o style.scss) |