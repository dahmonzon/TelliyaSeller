import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  public open_menu: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public openMenu(): void{
    this.open_menu = true;
  }

  public closeMenu(): void{
    this.open_menu = false
  }

}
