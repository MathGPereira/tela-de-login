import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

    constructor() {}

    @Input() tabindex!: string;

    acionaCheck(): void {
        const checkbox = <HTMLInputElement>document.querySelector("[data-check]");

        checkbox.checked = !checkbox.checked
    }
}
