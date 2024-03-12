import { Component,} from '@angular/core';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})

export class NavComponent {

  svg1: string="noHover";
  svg2: string="noHover";


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




  
