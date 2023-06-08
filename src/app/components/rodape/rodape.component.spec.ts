import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RodapeComponent } from "./rodape.component";

describe(RodapeComponent.name, () => {
    let fixture!: ComponentFixture<RodapeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RodapeComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RodapeComponent);
    });

    it("Deve criar o componente rodapé", () => {
        const componente = fixture.componentInstance;
        expect(componente).toBeTruthy();
    });
});
