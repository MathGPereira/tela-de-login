import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { ConectaApiService } from 'src/app/servidor/servicos/conecta-api.service';

@Directive({
  selector: '[appValidaLogin]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting:ValidaLoginDirective,
    multi: true
  }]
})
export class ValidaLoginDirective {

    constructor(private service: ConectaApiService) { }

}
