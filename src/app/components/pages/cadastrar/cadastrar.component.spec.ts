import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CadastrarComponent } from "./cadastrar.component";

describe(CadastrarComponent.name, () => {
    let fixture!: ComponentFixture<CadastrarComponent>;
    let componente!: CadastrarComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CadastrarComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CadastrarComponent);
        componente = fixture.componentInstance;
    });

    it("(D) Deve criar o componente", () => {
        expect(componente).toBeTrue();
    });
});
