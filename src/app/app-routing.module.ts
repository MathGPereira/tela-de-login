import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { CadastrarComponent } from './components/pages/cadastrar/cadastrar.component';
import { TrocarContaComponent } from './components/pages/trocar-conta/trocar-conta.component';
import { PaginaInicialComponent } from './components/pages/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: 'full'
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "cadastrar",
        component: CadastrarComponent
    },
    {
        path: "trocarSenha",
        component: TrocarContaComponent
    },
    {
        path: "paginaInicial",
        component: PaginaInicialComponent
    },
    {
        path: "**",
        redirectTo: "login"
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
