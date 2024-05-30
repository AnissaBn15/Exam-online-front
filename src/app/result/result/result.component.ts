import { StudentsService } from 'src/app/students.service';
import { Student } from './../../student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  id!: number;
  etudiant!: Student;
  nom!: string;
  prenom!: string;
  score!: number;
  
  constructor(private etudiantService: StudentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']
    this.etudiant = this.etudiantService.getStudentById(this.id)!;
    this.nom = this.etudiant.lastName;
    this.prenom = this.etudiant.firstName;
    this.score = this.etudiant.score;
  }
}
