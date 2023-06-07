import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/interface/cadastro';
import { Erro } from 'src/app/interface/erro';
import { ConectaApiService } from 'src/app/servidor/servicos/conecta-api.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

    erro: Erro = {
        status: false,
        mensagem: ""
    }

    constructor(
        private service: ConectaApiService,
        private route: Router
    ) {}

    validaCadastro(form: NgForm): void {
        if(form.valid) {
            const nome = <HTMLInputElement>document.querySelector("[data-nome]");
            const sobrenome = <HTMLInputElement>document.querySelector("[data-sobrenome]");
            const email = <HTMLInputElement>document.querySelector("[data-email]");
            const senha = <HTMLInputElement>document.querySelector("[data-senha]");
            const confirmaSenha = <HTMLInputElement>document.querySelector("[data-confirmaSenha]");
            const infoCadastro: Cadastro = {
                nome: btoa(nome.value),
                sobrenome: btoa(sobrenome.value),
                email: btoa(email.value),
                senha: btoa(senha.value)
            }

            this.service.cadastraUsuario(infoCadastro).subscribe(resposta => {
                if(!JSON.parse(JSON.stringify(resposta)).status) {
                    this.erro.mensagem = "E-mail já cadastrado";
                    this.erro.status = true;

                    nome.value = "";
                    sobrenome.value = "";
                    email.value = "";
                    senha.value = "";
                    confirmaSenha.value = "";
                }else {
                    this.route.navigate(["home"]);
                }
            });
        }
    }

}
