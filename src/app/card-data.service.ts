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
      title: "Août 2022 - Nov 2023",
      subTitle: "Réceptionniste de nuit - Hôtel le Bordeaux Sud",
      text: "Pessac, CDI",
      description: "Gestion en complète autonmie d'un hôtel pendant la nuit. Prise en charge des demandes des clients, le nettoyage des espaces communs et la mise en place du buffet petit-déjeuner le matin.",
      iconUrl: [
        {id: 0, url: "/assets/fond-carte/trèfle2.png"},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
    {
      id: 1,
      title: "Mars 2021 - Juin 2021",
      subTitle: "Stagiaire Graphiste - Graphic System",
      text: "Pessac - Stage",
      description: "Conception de contenu avec les logiciels de la suite Adobe et retouche de photographies sur Photoshop, création d'effet et de montages, correction colorimétriques des images",
      iconUrl: [
        {id: 0, url: "/assets/fond-carte/carreau2.png"},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]
  
    },
    {
      id: 2,
      title: "Sept 2018 - Juin 2020",
      subTitle: "Graphiste concepteur muticanal - ECOD",
      text: "Bordeaux - BTS",
      description: "Savoir développer un outil de communication de sa création jusqu'à son impression/utilisation. Initiation au développement Web au travers des languages HTML, CSS et Javascript. Comprendre les principes fondamentaux de la mise en page et du design UI/UX.  Initiation au dessin d'art et aux règles de colorimétrie  ",
      iconUrl: [
        {id: 0, url: "/assets/fond-carte/pique2.png"},
        {id: 1, url: ""},
        {id: 2, url: ""},
        {id: 3, url: ""}
      ]

    },
    {
      id: 3,
      title: "Sept 2015 - Jul 2016",
      subTitle: "Marbrier - Ets J.Schoumacker",
      text: "Pessac, Contrat d'apprentissage",
      description: "Pose de dallage ornemental, revêtement muraux en pierre et marbre, travaux de moulurage, composition, incrustation",
      iconUrl: [
        {id: 0, url: "/assets/fond-carte/coeur2.png"},
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
      subTitle: "",
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
      subTitle: "",
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
      subTitle: "",
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
      subTitle: "",
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
      title: "La météo en temps réél",
      subTitle: "Technologie utilisées",
      text: "",
      description: "Cette application utilise une api distante pour collecter des informations sur la météo du jour dans la ville demandée",
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
