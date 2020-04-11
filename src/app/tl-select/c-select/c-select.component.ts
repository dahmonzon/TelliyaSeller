import { Component, OnInit, ViewChild, HostListener, ElementRef, TemplateRef, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { DomPortal, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { SelectOption } from '../model/select-option.model';

@Component({
  selector: 'c-select',
  templateUrl: './c-select.component.html',
  styleUrls: ['./c-select.component.scss']
})
export class CSelectComponent implements OnInit {

  @ViewChild('cselectfield')
  public reference: HTMLElement;

  @ViewChild('cselectfield')
  public ref: ElementRef;

  @ViewChild('mytemp')
  public tempref: TemplateRef<any>;

  public currentOption: SelectOption = {id: '', name: '--', isSelect: true};
  public input_value = '';

  private overlayRef: OverlayRef;

  @Input() hasInput: boolean = false;
  @Input() options: SelectOption[];
  @Output() optionsChange = new EventEmitter<SelectOption>();
  @Output() phoneNumber = new EventEmitter<string>();



  constructor(private overlay: Overlay, private viewcontref: ViewContainerRef) {

   }

  ngOnInit(): void {
    this.currentOption = this.options.find((option) => option.isSelect === true);
    this.optionsChange.emit(this.currentOption);
    this.phoneNumber.emit("");
  }

  phoneValueChange(event): void {
    let phone = event.target.value
    this.phoneNumber.emit(phone);
  }

  onOptionClick(value: SelectOption){
      this.options = this.options.map((option) => {
        if(option.id === value.id){
          option.isSelect = true;
        }else{
          option.isSelect = false;
        }
        return option
      })
      this.currentOption = value
      this.optionsChange.emit(value)
      this.overlayRef.dispose();
  }

  @HostListener('window:resize') 
  public onWinResize() {
    this.sync();
  }


  sync(){
    if( !this.overlayRef){
      return
    }
    this.overlayRef.updateSize({width: this.ref.nativeElement.clientWidth})
  }

  showDropdown(){
    this.overlayRef =  this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(new TemplatePortal(this.tempref,this.viewcontref));
    this.sync();
    this.overlayRef.backdropClick().subscribe((value)=> {
      this.overlayRef.dispose();
    })
  }
  getOverlayConfig(){
    const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(this.reference)
        .withPush(false)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
          }
        ]);

    return new OverlayConfig({
        maxHeight: 350,
        positionStrategy: positionStrategy,
        hasBackdrop: true,
        backdropClass: 'tl-backdrop'
    })
  }
}