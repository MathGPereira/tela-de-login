import { CheckboxComponent } from "./checkbox.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe(CheckboxComponent.name, () => {
    let fixture: ComponentFixture<CheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CheckboxComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CheckboxComponent);
    });

    it("Deveria criar o componente", () => {
        const componente = fixture.componentInstance;
        expect(componente).toBeTruthy();
    });

    it(`#${CheckboxComponent.prototype.acionaCheck.name} deve inverter um valor booleano quando for chamado`, () => {
        const component = fixture.componentInstance;

        expect(component.acionaCheck()).toBeInstanceOf(Boolean)
    });
});
