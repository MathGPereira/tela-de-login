import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CabecalhoComponent } from "./cabecalho.component";

describe(CabecalhoComponent.name, () => {
    let fixture!: ComponentFixture<CabecalhoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CabecalhoComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CabecalhoComponent);
    });

    it("Deveria criar o componente", () => {
        const componente = fixture.componentInstance;
        expect(componente).toBeTruthy();
    });
});
