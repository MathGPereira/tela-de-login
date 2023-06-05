import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/interface/login';

@Injectable({
  providedIn: 'root'
})
export class ConectaApiService {

    private readonly urlAPI = "http://127.0.0.1:5000/api";

    constructor(private http: HttpClient) { }

    validaLogin(infoLogin: Login): Observable<object> {
        return this.http.post<object>(`${this.urlAPI}/validaLogin`, infoLogin);
    }

}
