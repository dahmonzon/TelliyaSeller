import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSelectComponent } from './c-select/c-select.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule
  ],
  exports: [CSelectComponent],
  entryComponents: []
})
export class TlSelectModule { }
