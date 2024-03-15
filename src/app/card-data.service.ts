import { Injectable } from '@angular/core';
import { Card } from './card';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor() { }

 getCardParcours(): Card[]{
  return [
    {
      id: 0,
      title: "2024",
      text: "aaa",
      description: "",
      iconUrl: [
        {id: 0, url: ""},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
    {
      id: 1,
      title: "2021",
      text: "aaa",
      description: "",
      iconUrl: [
        {id: 0, url: ""},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
    {
      id: 2,
      title: "2020",
      text: "aaa",
      description: "",
      iconUrl: [
        {id: 0, url: ""},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
    {
      id: 3,
      title: "2018",
      text: "aaa",
      description: "",
      iconUrl: [
        {id: 0, url: ""},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
    {
      id: 4,
      title: "2015",
      text: "aaa",
      description: "",
      iconUrl: [
        {id: 0, url: ""},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
  
  ]

}

getCardProjets(): Card[]{
  return [
    {
      id: 0,
      title: "La météo du jour",
      text: "aaa",
      description: "",
      iconUrl: [
        {id: 0, url: ""},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
    {
      id: 1,
      title: "La météo du jour",
      text: "aaa",
      description: "",
      iconUrl: [
        {id: 0, url: ""},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
    {
      id: 2,
      title: "La météo du jour",
      text: "aaa",
      description: "",
      iconUrl: [
        {id: 0, url: ""},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
    {
      id: 3,
      title: "La météo du jour",
      text: "aaa",
      description: "",
      iconUrl: [
        {id: 0, url: ""},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
    {
      id: 4,
      title: "La météo du jour",
      text: "aaa",
      description: "",
      iconUrl: [
        {id: 0, url: ""},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
  
  ]
}

}
