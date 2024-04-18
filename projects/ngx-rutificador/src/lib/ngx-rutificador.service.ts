import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxRutificadorService {

  constructor() { }

  validateRut(params: string) {
    let value = this.cleanRut(params)
    let sum = 0;
    let rut = value.substring(0, value.length - 1);
    let dv = value.substring(value.length - 1);
    if (dv.toUpperCase() == 'K') {
      dv = '10'
    }
    let resultDv
    let arrRut = rut.split('')
    if (arrRut.length < 7) {
      return false
    } else {
      let b = 0
      let c = 0
      let arrResult: number[] = []
      var arrReverse = arrRut.reverse()
      arrReverse.map((value: string, index: number) => {
        if (index > 5) {
          arrResult[b] = Number(value) * (2 + c)
          c++
        } else {
          arrResult[b] = Number(value) * (2 + b)
        }
        b++
      })
      arrResult.map((value) => {
        sum += value
      })
      resultDv = 11 - (sum - Math.trunc(sum / 11) * 11)
      if (resultDv > 9 && dv == "0") {
        return true
      }
      if (resultDv == Number(dv)) {
        return true
      } else {
        return false
      }
    }
  }

  formatRut(value: string) {
    const rut: string = this.cleanRut(value);
  
    if (rut.length <= 1) {
      return rut;
    }
  
    let result: string = `${rut.slice(-4, -1)}-${rut.substr(rut.length - 1)}`;
    for (let i: number = 4; i < rut.length; i += 3) {
      result = `${rut.slice(-3 - i, -i)}.${result}`;
    }
  
    return result;
  }

  cleanRut(num: number | string): string {
    let value = num.toString().split('.').join('').split('-').join('')
    return value
  }
}
