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
  projetsIsClicked: number = 0;
  parcoursIsClicked: number = 0;

  //on associe le bouton à la div à afficher 
  //et on empêche l'utilisateur d'afficher l'autre div
  inc(i: number) {
    i++;
    console.log(i);
    
  }
  
  showingCard(activeCard: number, otherCard:number, showingCard: boolean) {
    if (otherCard == 0 ? true : false && activeCard == 1) {
      showingCard = true;

    }
    if (activeCard == 2) {
      showingCard = false;
      activeCard = 0

    }

  }
  
  showingProjets() {
    if (this.parcoursIsClicked == 1 ? false : true && this.projetsIsClicked == 1) {
      this.projetsIsShown = true;
      this.parcoursIsShown = false;

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
