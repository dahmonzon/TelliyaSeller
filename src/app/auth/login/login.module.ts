import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { fromLoginReducer, fromLoginEffect } from './loginStore';
import { TlSelectModule } from 'src/app/tl-select/tl-select.module';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    TlSelectModule,
    StoreModule.forFeature('login', fromLoginReducer.loginReducer),
    EffectsModule.forFeature([fromLoginEffect.LoginEffect])
  ]
})
export class LoginModule { }
