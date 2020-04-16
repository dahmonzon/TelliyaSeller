import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/appStore';
import { Store, select } from '@ngrx/store';
import { fromLoginAction } from './loginStore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(fromLoginAction.login({credentials: {phone: '45656767887', password: 'giovani'}}));
  }

}
