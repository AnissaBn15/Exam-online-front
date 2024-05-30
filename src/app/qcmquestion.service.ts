import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QcmquestionService {
  seconds: number = 900; // 15 minutes en secondes

  //seconds: number = 0;
  //timer = null;

  private questions = [
    {
      question: "Quel est l'objectif principal de la régression linéaire ?",
      answers: [
        { text: 'Prédire une variable continue en fonction d\'une ou plusieurs variables indépendantes.', correct: true },
        { text: 'Classer les données en deux catégories distinctes.', correct: false },
        { text: 'Trouver des clusters dans un ensemble de données.', correct: false }
      ]
    },
    {
      question: 'Quelle méthode de machine learning est utilisée pour regrouper des données non étiquetées en fonction de similarités ?',
      answers: [
        { text: 'Clustering', correct: true },
        { text: 'Classification', correct: false },
        { text: 'Régression', correct: false }
      ]
    }
  ];
  
  getQuestions() {
    return this.questions;
  }

  constructor() {
    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        // Rediriger vers la page de résultat ou faire d'autres actions lorsque le temps est écoulé
      }
    }, 1000); // Mettre à jour chaque seconde
  }


  displayTimeElapsed() {
    const minutes = Math.floor(this.seconds / 60) < 10 ? '0' + Math.floor(this.seconds / 60) : Math.floor(this.seconds / 60);
    const seconds = Math.floor(this.seconds % 60) < 10 ? '0' + Math.floor(this.seconds % 60) : Math.floor(this.seconds % 60);
    return `${minutes} : ${seconds}`;
  }
}
