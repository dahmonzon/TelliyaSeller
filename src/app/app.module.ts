import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { environment } from 'src/environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { AuthComponent } from './auth/auth.component';
import { MenuComponent } from './menu/menu.component';
import {reducers, metaReducers} from './appStore'
import { TlSelectModule } from './tl-select/tl-select.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    AuthComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TlSelectModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
        strictStateImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
