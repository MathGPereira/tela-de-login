import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MenssagemErroComponent } from "./menssagem-erro.component";

describe(MenssagemErroComponent.name, () => {
    let fixture!: ComponentFixture<MenssagemErroComponent>;
    let componente!: MenssagemErroComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenssagemErroComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(MenssagemErroComponent);
        componente = fixture.componentInstance;
    });

    it("(D) Deve criar o componente", () => {
        expect(componente).toBeTruthy();
    });

    it("(D) Deve possuir uma mensagem atribuida a tag span do componente", () => {
        const span: HTMLSpanElement = fixture.nativeElement.querySelector("span");
        componente.mensagem = "Mensagem de erro";

        fixture.detectChanges();
        expect(span.textContent?.trim()).toBe(componente.mensagem);
    });

    it("Deve ter um (@Input mensagem) com uma string não vazia quando atribuido uma mensagem de erro", () => {
        componente.mensagem = "Mensagem de erro";

        expect(componente.mensagem).not.toBe("");
    });
});
