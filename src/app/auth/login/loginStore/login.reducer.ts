import { createReducer, on } from '@ngrx/store'
import * as fromLoginAction from './login.action';
import { Employe } from 'src/app/models/employe.model';
import { Shop } from 'src/app/models/shop.model';


export interface LoginState {
    currentEmploye: Employe,
    currentShop: Shop,
    logged: boolean,
    logging: boolean,
    error: string,
}

export const loginInitialState = {
    currentEmploye: undefined,
    currentShop: undefined,
    logged: false,
    logging: false,
    error: undefined
}

const _loginReducer = createReducer(
    loginInitialState,
    on(fromLoginAction.login, (state, {credentials}) => {
        return {...state, logging: true}
    }),
    on(fromLoginAction.loginSuccess, (state, {loginResult}) => {
        return {
            ...state,
            logged: true,
            logging: false,
            currentEmploye: loginResult.currentEmploye,
            currentStore: loginResult.currentShop
        }
    }),
    on(fromLoginAction.loginFailed, (state, {error}) => {
        return {...state, logging: false, error: error}
    })
);

export  function loginReducer(state, action){
    return _loginReducer(state, action);
}