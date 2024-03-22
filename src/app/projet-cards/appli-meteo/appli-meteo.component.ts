import { Component, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appli-meteo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './appli-meteo.component.html',
  styleUrl: './appli-meteo.component.scss'
})
export class AppliMeteoComponent {
  
  @Input() showMeteo: boolean = false;


  constructor(private renderer: Renderer2) {}

  ville: string = "";
  temp: number = 0;
  fetchIcon: string = "";
  conditions: string = "";
  fetchHumidity: string = "";
  update: string ="";


async fetchMeteo(ville: string) {

    try {
      
      const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=96793651afd74512b1c75727241403&q=${ville}&days=1&aqi=no&alerts=yes`)

//Création d'un message d'erreur si la requête n'aboutit pas
      if (!res.ok) {
        throw new Error("Could not find this city");
      }

      const data = await res.json();
      this.temp = data.current.temp_c.toFixed(0);
      this.conditions = data.current.condition.text;
      this.update = data.current.last_updated;
      this.fetchIcon = data.current.condition.icon;
      this.fetchHumidity = data.current.humidity;


//On attrappe le message d'erreur et on l'affiche
    } catch (error) {
      console.error(error);
    }

 }

}
