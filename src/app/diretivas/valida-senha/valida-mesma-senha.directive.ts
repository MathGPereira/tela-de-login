import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidaMesmaSenha]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidaMesmaSenhaDirective,
    multi: true
  }]
})
export class ValidaMesmaSenhaDirective implements Validator {

    constructor() { }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const confirmaSenha = control.value;
        const senha = <HTMLInputElement>document.querySelector("[data-senha]");
        const ehIgual = confirmaSenha === senha;

        return ehIgual ? null : {"appValidaMesmaSenha": true};
    }

}
