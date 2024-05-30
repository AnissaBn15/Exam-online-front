import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  id : string = '';
  password: string = '';
  errormsg: string = '';

  constructor(private router: Router, private studentsService: StudentsService) { }
  login(){
    const student = this.studentsService.getStudentByUsernameAndPassword(this.id, this.password);
    this.errormsg = ''
    if(student !== undefined){
      const link = ['validation', student.id];
      this.password='';
      this.id = '';
      this.router.navigate(link);
    }else{
      this.errormsg = "Your id or password is incorrect ! Please check it again. ";
      this.id = '';
      this.password='';
    }
}
}
