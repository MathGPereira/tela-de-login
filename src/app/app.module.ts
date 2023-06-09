import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MenssagemErroComponent } from './components/menssagem-erro/menssagem-erro.component';
import { FormsModule } from '@angular/forms';
import { ValidaCadastroDirective } from './diretivas/formulario-cadastro/valida-cadastro.directive';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarComponent } from './components/pages/cadastrar/cadastrar.component';
import { TrocarContaComponent } from './components/pages/trocar-conta/trocar-conta.component';
import { PaginaInicialComponent } from './components/pages/pagina-inicial/pagina-inicial.component';
import { ValidaMesmaSenhaModule } from './diretivas/valida-senha/valida-mesma-senha.module';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CabecalhoComponent,
    LoginComponent,
    CheckboxComponent,
    MenssagemErroComponent,
    ValidaCadastroDirective,
    CadastrarComponent,
    TrocarContaComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ValidaMesmaSenhaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
