import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ConectaApiService } from 'src/app/servidor/servicos/conecta-api.service';
import { Login } from 'src/app/interface/login';
import { Erro } from 'src/app/interface/erro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    autenticado!: boolean;
    erro: Erro = {
        status: false,
        mensagem: ""
    }

    constructor(
        private service: ConectaApiService,
        private route: Router
    ) {}

    validaLogin(form: NgForm): void {
        if(form.valid) {
            const email = <HTMLInputElement>document.querySelector("[data-email]");
            const senha = <HTMLInputElement>document.querySelector("[data-senha]");
            const infoLogin: Login = {
                email: btoa(email.value),
                senha: btoa(senha.value)
            }

            this.service.validaLogin(infoLogin).subscribe(resposta => {
                if(!JSON.parse(JSON.stringify(resposta)).status) {
                    this.erro.mensagem = "E-mail ou senha inválidos";
                    this.erro.status = true;

                    email.value = "";
                    senha.value = "";

                    this.autenticado = false;
                }else {
                    this.autenticado = true;
                    this.route.navigate(["paginaInicial"]);
                }
            });
        }
    }

    public getAutenticado() {

        return this.autenticado;
    }
}
