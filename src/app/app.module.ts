import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { LoginComponent } from './components/login/login.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MenssagemErroComponent } from './components/menssagem-erro/menssagem-erro.component';
import { FormsModule } from '@angular/forms';
import { ValidaLoginDirective } from './diretivas/formulario-login/valida-login.directive';
import { ValidaCadastroDirective } from './diretivas/formulario-cadastro/valida-cadastro.directive';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CabecalhoComponent,
    LoginComponent,
    CheckboxComponent,
    MenssagemErroComponent,
    ValidaLoginDirective,
    ValidaCadastroDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
