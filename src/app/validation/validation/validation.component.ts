import { WebsocketService } from 'src/app/websocket.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit{

  id!: number;
  etudiant!: Student;
  nom!: string;
  prenom!: string;
  identifiant!: string;
  status: boolean = false;
  telephone1: boolean = false;
  telephone2: boolean = false;
  videoStream: any = null;
  messages: string[] = [];
  @ViewChild('connect1') connect1: ElementRef | undefined;
  @ViewChild('connect2') connect2: ElementRef | undefined;
  @ViewChild('status1') status1: ElementRef | undefined;
  constructor(private etudiantService: StudentsService, private route: ActivatedRoute, private router: Router, private webSocketService: WebsocketService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']
    this.etudiant = this.etudiantService.getStudentById(this.id)!;
    this.identifiant = this.etudiant.username;
    this.nom = this.etudiant.lastName;
    this.prenom = this.etudiant.firstName;
    this.webSocketService.getMessages().subscribe((msg: string) => {
      console.log(msg)
      if(msg == "response1 to true"){
        this.connect1!.nativeElement.style.color = "green";  
        this.connect1!.nativeElement.innerHTML = "connecté";
        this.telephone1 = true;
      }
      if(msg == "response2 to true"){
        this.connect2!.nativeElement.style.color = "green";  
        this.connect2!.nativeElement.innerHTML = "connecté";
        this.telephone2 = true;
      }
    });
    this.checkPermissions();
  }

  sendMessage() {
      this.webSocketService.sendMessage('verif2');
      this.webSocketService.sendMessage('verif1');

    }
  


  go(){
    if(this.telephone1 && this.telephone2 && this.status ) {
      this.webSocketService.sendMessage('go');
      if (this.videoStream.length > 0) {
        this.videoStream[0].stop();
      }
      const link = ['qcmtest', this.id];
      this.router.navigate(link);
    }
  }

  checkPermissions() {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 10,
        height: 10
      }
    }).then((res) => {
      this.videoStream = res.getVideoTracks();
      console.log(this.videoStream)
      this.status = true;
      this.status1!.nativeElement.innerHTML = 'Votre caméra fonctionne bien.';
      this.status1!.nativeElement.style.color="green";
    }).catch(err => {
      console.log(err);
      if(err?.message === 'Permission denied') {
        this.status1!.nativeElement.innerHTML = 'Autorisation refusée!! Veuillez réessayer en approuvant l’accès.';
      } else {
        this.status1!.nativeElement.innerHTML = 'Vous n’avez peut-être pas de système de caméra, veuillez réessayer ...';
      }
    })
  }
}

