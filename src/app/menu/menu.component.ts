import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  current_user = {
    'name': 'Giovani',
    'last_name': 'Santos',
    'phone': '0755465042',
    'photo': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg'
  }


  features = []
  constructor(private router: Router, private menuService: MenuService) {
    this.features = menuService.FEATURES;

    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd){
        let url = data.urlAfterRedirects;
        this.features = this.features.map((element) => {
            if( url.includes(element.link)){
              element.isCurrent = true;
            }else{
              element.isCurrent = false;
            }
            return element;
        });
      }
    });

  }

  ngOnInit() {
  }



  onFeatureClick(icon: string){
      this.features.forEach((value) => {
        if( value.icon == icon){
          this.router.navigateByUrl('/core' +value.link);
        }
      });
  }
}
