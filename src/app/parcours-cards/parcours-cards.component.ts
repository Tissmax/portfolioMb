import { Component } from '@angular/core';
import { Card } from '../card';
import { CardDataService } from '../card-data.service';
import { CommonModule } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-parcours-cards',
  standalone: true,
  imports: [CommonModule,          
  ],
  providers: [CardDataService],
  templateUrl: './parcours-cards.component.html',
  styleUrl: './parcours-cards.component.scss'
})
export class ParcoursCardsComponent {


  cards!: Card[];
  i: number = 0
  
  constructor(private cardService: CardDataService, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCardParcours();
    
  }
  
  cardShuffleLeft(cardId: number) {

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


}}}
// si le nmbre de click excede le nbre de carte on reset le compteur et on replace les carte
