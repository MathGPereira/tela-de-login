import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

    @Input() tabindex!: string;

    constructor() {}

    acionaCheck(input: HTMLInputElement): boolean {
        return input.checked = !input.checked
    }
}
