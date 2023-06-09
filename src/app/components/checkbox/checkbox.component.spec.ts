import { CheckboxComponent } from "./checkbox.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe(CheckboxComponent.name, () => {
    let fixture!: ComponentFixture<CheckboxComponent>;
    let componente!: CheckboxComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CheckboxComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CheckboxComponent);
        componente = fixture.componentInstance;
    });

    it("(D) Deveria criar o componente", () => {
        expect(componente).toBeTruthy();
    });

    it("(D) Deve iniciar com o valor do checkbox true", () => {
        const checkbox: HTMLInputElement = fixture.nativeElement.querySelector("[data-check]");

        expect(checkbox.checked).toBeTrue();
    });

    it("(D) Deve iniciar com (@Input tabindex) definido", () => {
        const checkboxPersonalizado: HTMLInputElement = fixture.nativeElement.querySelector(".checkbox-personalizado");

        expect(checkboxPersonalizado.tabIndex).not.toBeUndefined()
        expect(checkboxPersonalizado.tabIndex).not.toBeNull()
    });

    it("(D) Deve aterar o valor do checkbox quando for pressionado enter no checkbox personalizado", () => {
        const checkboxPersonalizado: HTMLInputElement = fixture.nativeElement.querySelector(".checkbox-personalizado");
        const checkbox: HTMLInputElement = fixture.nativeElement.querySelector("[data-check]");
        const evento = new KeyboardEvent("keyup", { key: "Enter" });

        checkboxPersonalizado.dispatchEvent(evento);
        expect(checkbox.checked).toBeFalse();
    });

    it("(D) Deve alterar o valor do checkbox quando for pressionado spaço no checkbox personalizado", () => {
        const checkboxPersonalizado: HTMLInputElement = fixture.nativeElement.querySelector(".checkbox-personalizado");
        const checkbox: HTMLInputElement = fixture.nativeElement.querySelector("[data-check]");
        const evento = new KeyboardEvent("keyup", { key: "Space" });

        checkboxPersonalizado.dispatchEvent(evento);
        expect(checkbox.checked).toBeFalse();
    });

    it(`#${CheckboxComponent.prototype.acionaCheck.name} deve inverter um valor booleano quando for chamado`, () => {
        const checkbox: HTMLInputElement = fixture.nativeElement.querySelector("[data-check]");

        componente.acionaCheck(checkbox);
        expect(checkbox.checked).toBeFalse();
    });
});
