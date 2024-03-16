import { Component } from '@angular/core';
import { Card } from '../card';
import { CardDataService } from '../card-data.service';
import { CommonModule } from '@angular/common';
import { Renderer2 } from '@angular/core';

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
  
  constructor(private cardService: CardDataService, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCardParcours();
  }

  
  i:number=0;
  
  redistributionCard(cardId: number) {

//n est l'indice de la carte
//on incrémente pour savoir combien de fois l'utilisateur click
    this.i++;
    let a = cardId+1;
    let b = cardId+2;
    let c = cardId+3;


    if (this.i + cardId == 5) {
      this.renderer.addClass(document.getElementById("card"+cardId), 'left1');
    }
    if (this.i+cardId+1 == 6) {
      this.renderer.addClass(document.getElementById("card"+a), 'left2');
      this.renderer.removeClass(document.getElementById("card"+a), 'left1');
    }
    if (this.i+cardId+2 == 7) {
      this.renderer.addClass(document.getElementById("card"+b), 'left3');
      this.renderer.removeClass(document.getElementById("card"+b), 'left2');
    }
    if (this.i+cardId+3 == 8) {
      this.renderer.addClass(document.getElementById("card"+c), 'left4');
      this.renderer.removeClass(document.getElementById("card"+c), 'left3');
    }
    console.log(this.i)
  }
}
