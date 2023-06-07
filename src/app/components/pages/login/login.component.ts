import { Component } from '@angular/core';
import { ConectaApiService } from 'src/app/servidor/servicos/conecta-api.service';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/interface/login';
import { Router } from '@angular/router';
import { Erro } from 'src/app/interface/erro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
                }else {
                    this.route.navigate(["home"]);
                }
            });
        }
    }
}
