import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interface/login';
import { ConectaApiService } from 'src/app/servidor/servicos/conecta-api.service';

@Component({
  selector: 'app-trocar-conta',
  templateUrl: './trocar-conta.component.html',
  styleUrls: ['./trocar-conta.component.css']
})
export class TrocarContaComponent {

    @Input() erro = {
        status: false,
        mensagem: ""
    }

    constructor(
        private service: ConectaApiService,
        private route: Router
    ) {}

    trocaSenha(form: NgForm): void {
        if(form.valid) {
            const email = <HTMLInputElement>document.querySelector("[data-email]");
            const novaSenha = <HTMLInputElement>document.querySelector("[data-senha]");
            const infoTrocaSenha: Login = {
                email: btoa(email.value),
                senha: btoa(novaSenha.value)
            }

            this.service.trocaSenhaUsuario(infoTrocaSenha).subscribe(resposta => {
                if(!JSON.parse(JSON.stringify(resposta)).status) {
                    this.erro.mensagem = "E-mail ou senha inválidos";
                    this.erro.status = true;

                    email.value = "";
                    novaSenha.value = "";
                }else {
                    this.route.navigate(["home"]);
                }
            });
        }
    }


}
