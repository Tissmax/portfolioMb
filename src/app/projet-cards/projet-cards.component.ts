import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projet-cards',
  standalone: true,
  imports: [],
  templateUrl: './projet-cards.component.html',
  styleUrl: './projet-cards.component.scss'
})
export class ProjetCardsComponent {
  jsonDataResult: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/json/data.json').subscribe((res)=> {
      this.jsonDataResult = res;
      console.log('---result :: ', this.jsonDataResult);
    })
  }
}
