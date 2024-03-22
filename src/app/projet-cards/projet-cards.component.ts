import { Component, ViewChild } from '@angular/core';
import { CardDataService } from '../card-data.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Card } from '../card';
import { Renderer2 } from '@angular/core';
import { AppliMeteoComponent } from './appli-meteo/appli-meteo.component';

@Component({
  selector: 'app-projet-cards',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    AppliMeteoComponent
  ],
  providers: [ CardDataService ],
  templateUrl: './projet-cards.component.html',
  styleUrl: './projet-cards.component.scss',
})

export class ProjetCardsComponent {

  cards!: Card[];
  i: number = 0;
  showMeteo: boolean = false;

  @ViewChild(AppliMeteoComponent) child!: AppliMeteoComponent

  constructor(private cardService: CardDataService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCardProjets();
  }

  showProjet(id: number) {
    if (id == 4) {
      this.showMeteo = !this.showMeteo;
      this.child.fetchMeteo("Bordeaux");
    }
  }

  cardShuffle(cardId: number) {

    // incrémentation click
        this.i++;
        let a = cardId-1;
        let b = cardId+1;
        let c = cardId+2;
        let d = cardId+3;
        let e = cardId+4;
    
    
      let carte = document.getElementById('card'+cardId);
      let cartePrécédente = document.getElementById('card'+a);
      let carteSuivante =document.getElementById('card'+b);
      let carteNdeux = document.getElementById('card'+c);
      let carteNtrois = document.getElementById('card'+d);
      let carteN4 = document.getElementById('card'+e)
     
      if (this.i == 1) {
        this.renderer.removeClass(cartePrécédente, 'right'+a);
        this.renderer.addClass(cartePrécédente, 'middle');
        this.renderer.removeClass(carte, 'middle');
        this.renderer.addClass(carte, 'left1');
      }
    
     
     if (this.i == 2) {
      this.renderer.removeClass(carteSuivante, 'left1');
      this.renderer.addClass(carteSuivante, 'left2');
      this.renderer.removeClass(cartePrécédente, 'right'+a);
      this.renderer.addClass(cartePrécédente, 'middle');
      this.renderer.removeClass(carte, 'middle');
      this.renderer.addClass(carte, 'left1');
     } 
    
     
     if (this.i == 3) {
      this.renderer.removeClass(carteSuivante, 'left1');
      this.renderer.addClass(carteSuivante, 'left2');
      this.renderer.removeClass(cartePrécédente, 'right'+a);
      this.renderer.addClass(cartePrécédente, 'middle');
      this.renderer.removeClass(carte, 'middle');
      this.renderer.addClass(carte, 'left1');
      this.renderer.removeClass(carteNdeux, 'left2');
      this.renderer.addClass(carteNdeux, 'left3');
    
     } 
    
     if (this.i == 4) {
      this.renderer.removeClass(carteSuivante, 'left1');
      this.renderer.addClass(carteSuivante, 'left2');
      this.renderer.removeClass(cartePrécédente, 'right'+a);
      this.renderer.addClass(cartePrécédente, 'middle');
      this.renderer.removeClass(carte, 'middle');
      this.renderer.addClass(carte, 'left1');
      this.renderer.removeClass(carteNdeux, 'left2');
      this.renderer.addClass(carteNdeux, 'left3'); 
      this.renderer.removeClass(carteNtrois, 'left3');
      this.renderer.addClass(carteNtrois, 'left4');
     }
    
    
     if (this.i == 5) {
      this.i = 0;
      this.renderer.removeClass(carteN4, 'left4');
      this.renderer.removeClass(carteNtrois, 'left3');
      this.renderer.removeClass(carteNdeux, 'left2');
      this.renderer.removeClass(carteSuivante, 'left1');
      this.renderer.removeClass(carte, 'middle');
      this.renderer.addClass(carteN4, 'middle');
      this.renderer.addClass(carteNtrois, 'right3');
      this.renderer.addClass(carteNdeux, 'right2');
      this.renderer.addClass(carteSuivante, 'right1');
      this.renderer.addClass(carte, 'right0');
    
    
    }}

}
