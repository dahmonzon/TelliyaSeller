import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/service/auth.service';
import { concatMap, map, catchError, tap} from 'rxjs/operators';
import * as fromLoginAction from './login.action'
import { of } from 'rxjs';

@Injectable()
export class LoginEffect {

    login$ = createEffect( () => this.actions$.pipe(
        ofType(fromLoginAction.login),
        tap(action => console.log(action)),
        concatMap((action) => this.authService.login(action.credentials).pipe(   
            map(result => fromLoginAction.loginSuccess({loginResult: result})),
            catchError( (error) => {
                console.log(error);
               return  of(fromLoginAction.loginFailed({error: error.status}))
            }
                )
        ) ),
    ))

    constructor(private actions$: Actions, private authService: AuthService){}
}