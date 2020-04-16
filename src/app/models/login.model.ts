import { Employe } from './employe.model';
import { Shop } from './shop.model';

export interface LoginModel {
    phone: string;
    password: string;
}

export interface LoginResultModel {
    currentEmploye: Employe;
    currentShop: Shop
}