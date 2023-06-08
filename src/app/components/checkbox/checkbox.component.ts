import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {


    @Input() tabindex!: string;

    constructor() {}

    acionaCheck(): boolean {
        const checkbox = <HTMLInputElement>document.querySelector("[data-check]");

        return checkbox.checked = !checkbox.checked
    }
}
