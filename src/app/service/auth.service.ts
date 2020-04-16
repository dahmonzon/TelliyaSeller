import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel, LoginResultModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop.model';
import { Employe } from '../models/employe.model';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient){}

    public login(credentials: LoginModel): Observable<LoginResultModel> {

        return this.http.get<LoginResultModel>('')
    }
}
