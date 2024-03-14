import { Component, EventEmitter } from '@angular/core';
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
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mathis Basier';

  bonjoStyle: string="";
  cercleGrand: string="cercleGrand";
  parcoursIsShown: boolean=false;
  projetsIsShown: boolean=false;
  
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
    this.bonjoStyle="color: #0C1325;";
    this.cercleGrand="cercleGrand hoverCercle";
  }
  noHover() {
    this.bonjoStyle="color: #F88A25;";
    this.cercleGrand="cercleGrand";
  }

 
}
