import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    ContactComponent,
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})

export class NavComponent {

  svg1: string="noHover";
  svg2: string="noHover";
  svg3: string="noHover";
  svg3Click: string=""
  showContact: boolean = false;
  isHovered: boolean = false

  onHover1() {
    this.svg1="hover";
  }
  
  onHover2() {
    this.svg2="hover";
  }
  
  noHover() {
    this.svg2="noHover";
    this.svg1="noHover";


  }

}




  
