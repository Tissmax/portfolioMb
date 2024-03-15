import { Component } from '@angular/core';
import { CardDataService } from '../card-data.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Card } from '../card';

@Component({
  selector: 'app-projet-cards',
  standalone: true,
  imports: [
    CommonModule,
    NgFor
  ],
  providers: [ CardDataService ],
  templateUrl: './projet-cards.component.html',
  styleUrl: './projet-cards.component.scss'
})

export class ProjetCardsComponent {

  cards!: Card[];
  
  constructor(private cardService: CardDataService) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCardProjets();
  }

}
