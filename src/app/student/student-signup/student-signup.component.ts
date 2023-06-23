import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import {StudentService} from '../../services/student.service';
import { student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss']
})
export class StudentSignupComponent {
  studentForm: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private router: Router,
    private toastService: NgToastService,
    private studentService : StudentService
  ) {}

  submitForm() {
    if (this.studentForm.valid) {`   `
      const teacherData: student = {
        fullName: this.fullNameControl.value,
        email: this.emailControl.value,
        password: this.passwordControl.value
      };

      this.studentService.postRegistration(teacherData).subscribe(
        (response: student) => {
          console.log('Teacher registration successful:', response);
          this.toastService.success({ detail: 'User Registered Successfully', summary: 'SUCCESS', duration: 3000 });
          this.studentForm.reset();
          // Optionally, navigate to another page after successful registration
          
        },
        (error: any) => {
          console.error('Error registering teacher:', error);
          // Handle error if needed
        }
      );
    }
  }

  // Getter methods for form controls
  get fullNameControl() {
    return this.studentForm.get('fullName') as FormControl;
  }

  get emailControl() {
    return this.studentForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.studentForm.get('password') as FormControl;
  }
}
