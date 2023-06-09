import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";

import { ValidaMesmaSenhaDirective } from "./valida-mesma-senha.directive";
import { ValidaMesmaSenhaModule } from "./valida-mesma-senha.module";

describe(ValidaMesmaSenhaDirective.name, () => {
    let fixture!: ComponentFixture<TesteDeDiretivaComponent>;
    let componente!: TesteDeDiretivaComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TesteDeDiretivaComponent],
            imports: [ValidaMesmaSenhaModule]
        });

        fixture = TestBed.createComponent(TesteDeDiretivaComponent);
        componente = fixture.componentInstance;
    });

    it(`#${ValidaMesmaSenhaDirective.prototype.validate.name} deve comparar os valores dos dois formulários de senha`, () => {
        const senha: HTMLInputElement = fixture.nativeElement.querySelector("#senha");
        const confirmaSenha: HTMLInputElement = fixture.nativeElement.querySelector("#confirmaSenha");

        senha.value = "123";
        confirmaSenha.value = "123";

        expect(componente.validate(confirmaSenha)).toBeTrue();
    });
});

@Component({
    template: `
        <div>
            <input id='senha' type='password'>
            <input id='confirmaSenha' type='password' appValidaMesmaSenha>
        </div>
    `
})
class TesteDeDiretivaComponent {

    public validate(control: HTMLInputElement): Boolean {
        const senha = <HTMLInputElement>document.querySelector("#senha");
        const confirmaSenha = control.value;

        return senha.value === confirmaSenha ? true : false;
    }
}
