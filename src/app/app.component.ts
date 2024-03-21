import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProjetCardsComponent } from './projet-cards/projet-cards.component'
import { ParcoursCardsComponent } from './parcours-cards/parcours-cards.component';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    NavComponent, 
    HttpClientModule, 
    ProjetCardsComponent, 
    ParcoursCardsComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  

  title = 'Mathis Basier';

  hovered: boolean = false;
  cercleGrand: string="cercleGrand";
  
  //on regarde sur quelle bouton l'utilisateur clic
  toogleParcours: boolean = false;
  toogleProjet: boolean = false;


  showProjet() {
    if (this.toogleProjet == false && this.toogleParcours == false) {
      this.toogleProjet = true;
    } else if (this.toogleProjet == true) {
      this.toogleProjet = false;
    }
  }
 
  showParcours() {
    if (this.toogleParcours == false  && this.toogleProjet == false) {
      this.toogleParcours = true;
    } else if (this.toogleParcours == true) {
      this.toogleParcours = false;
    }
  }
 
  onHover() {
    this.hovered = !this.hovered;
    this.cercleGrand="cercleGrand hoverCercle";
    
  }
  noHover() {
    this.hovered = !this.hovered;
    this.cercleGrand="cercleGrand";

  }

 
}
