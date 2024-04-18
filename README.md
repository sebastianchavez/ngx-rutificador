# NgxRutificador

Angular Rutificador


## Install

```
npm i ngx-rutificador
```


## Usage

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


## Pipe value format rut


```
{{'123123123' | fotmatRut}}
```


## Directive input format

```
<input type="text" ngxRutificador>
```