import { Injectable } from '@angular/core';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  private students: Student[] = [
    {
      id: 1,
      username: 'AnissaBn15',
      password: 'password',
      firstName: 'Anissa',
      lastName: 'BEN BOUDAOUD',
      score: 0
    },
    {
      id: 2,
      username: 'Nassim15',
      password: 'password',
      firstName: 'Nassim',
      lastName: 'LAGHOUB',
      score: 0
    },
    {
      id: 3,
      username: 'Aicha15',
      password: 'password',
      firstName: 'Aicha',
      lastName: 'Aicha',
      score: 0
    }
  ];

  constructor() { }

  getStudentById(id: number): Student | undefined {
    return this.students!.find(student => student.id === id);
  }

  getStudentByUsernameAndPassword(username: string, password: string): Student | undefined {
    return this.students.find(student => student.username === username && student.password === password);
  }

  editScoreById(id: number, score:number): void {
    const student = this.getStudentById(id)!;
    student.score = score;
  }
}
