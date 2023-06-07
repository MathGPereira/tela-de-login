import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/interface/login';
import { Cadastro } from 'src/app/interface/cadastro';

@Injectable({
  providedIn: 'root'
})
export class ConectaApiService {

    private readonly urlAPI = "http://127.0.0.1:5000/api";

    constructor(private http: HttpClient) { }

    validaLogin(infoLogin: Login): Observable<object> {
        return this.http.post<object>(`${this.urlAPI}/validaLogin`, infoLogin);
    }

    cadastraUsuario(infoCadastro: Cadastro): Observable<object> {
        return this.http.post<Cadastro>(`${this.urlAPI}/cadastrar`, infoCadastro);
    }

    trocaSenhaUsuario(infoTrocaSenha: Login): Observable<object> {
        return this.http.post<Login>(`${this.urlAPI}/trocar-senha`, infoTrocaSenha);
    }

}
