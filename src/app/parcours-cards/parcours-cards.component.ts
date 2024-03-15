import { Component } from '@angular/core';
import { Card } from '../card';
import { CardDataService } from '../card-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parcours-cards',
  standalone: true,
  imports: [CommonModule],
  providers: [CardDataService],
  templateUrl: './parcours-cards.component.html',
  styleUrl: './parcours-cards.component.scss'
})
export class ParcoursCardsComponent {


  cards!: Card[];
  
  constructor(private cardService: CardDataService) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCardParcours();
  }

}
