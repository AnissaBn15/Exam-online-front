import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber, Subscription, interval, timer } from 'rxjs';
import { QcmquestionService } from 'src/app/qcmquestion.service';
import { StudentsService } from 'src/app/students.service';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-qcmtest',
  templateUrl: './qcmtest.component.html',
  styleUrls: ['./qcmtest.component.scss']
})
export class QcmtestComponent implements OnInit {
  remainingTime: number = 15 * 60; // Temps initial en secondes (15 minutes)
    id !: number;
    questions!: any[];
    userAnswers: any[] = [];
    @ViewChild('preview', {static: false}) public previewElement!: ElementRef;
    @ViewChild('recording', {static: false}) public recordingElement!: ElementRef;
    public videoButtonTitle: string = "Start Recording";
    public isCapturingVideo: boolean = false;
    public videoContraints = {
      audio: true,
      video: { facingMode: "user" }
    }
    public isVideoTaken: boolean = false;
    public videoFile!: File;
    public recordButtonColor: string = "coral";
  
    constructor(private etudiantServer: StudentsService, private route: ActivatedRoute, private router: Router, public qcmQuestionService: QcmquestionService, private webSocketService: WebsocketService) {
    }
  
    ngOnInit() {
      this.id = +this.route.snapshot.params['id']
      this.questions = this.qcmQuestionService.getQuestions();
      setTimeout(() => {
        this.onSubmit()
      }, 900 * 1000);
    }
  
    onAnswerSelected(question: any, answer: any) {
      const userAnswer = {
        question: question.question,
        answer: answer.text,
        correct: answer.correct
      };
      this.userAnswers = this.userAnswers.filter(ans => ans.question !== question.question);
      this.userAnswers.push(userAnswer);
    }
  
    onSubmit() {
      let score = 0;
      this.userAnswers.forEach(answer => {
        if (answer.correct) {
          score++;
        }
      });
      this.webSocketService.sendMessage('fin');
      this.etudiantServer.editScoreById(this.id, score)
      this.router.navigate(['/result', this.id])
      //alert(`Votre score est de ${score} sur ${this.userAnswers.length} questions.`);
    }

}
