import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output()
  featureSelected = new EventEmitter<string>();
  @Input()
  buttonToggleState= false;
  show= "";
  togleState= false;

  onSelect(feature: string){
    console.log(feature);
    this.featureSelected.emit(feature);
  }

  onToggle(): void {
    this.togleState = !this.togleState
    if(this.togleState){
      this.show='show'
    } else {
      this.show='';
    }
  }
}
