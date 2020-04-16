import { createAction, props } from '@ngrx/store';
import { LoginModel, LoginResultModel } from 'src/app/models/login.model';


export const login = createAction(
    '[Login Component] Login new Employe',
    props<{credentials: LoginModel}>()
);

export const loginSuccess = createAction(
    '[Login Effect] Employe Login Success',
    props<{loginResult: LoginResultModel}>()
);


export const loginFailed = createAction(
    '[Login Effect] Employe Login Failed',
    props<{error: string}>()
)