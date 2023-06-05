import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menssagem-erro',
  templateUrl: './menssagem-erro.component.html',
  styleUrls: ['./menssagem-erro.component.css']
})
export class MenssagemErroComponent {

    @Input() mensagem = "";
}
