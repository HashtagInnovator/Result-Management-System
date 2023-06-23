import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { TeacherService } from '../../services/teacher.service';
import { teachers } from 'src/app/models/teachers.model';

@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.scss']
})
export class TeacherSignupComponent {
  teacherForm: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private router: Router,
    private toastService: NgToastService,
    private teacher: TeacherService
  ) {}

  submitForm() {
    if (this.teacherForm.valid) {
      const teacherData: teachers = {
        fullName: this.fullNameControl.value,
        email: this.emailControl.value,
        password: this.passwordControl.value
      };

      this.teacher.postRegistration(teacherData).subscribe(
        (response: teachers) => {
          console.log('Teacher registration successful:', response);
          this.toastService.success({ detail: 'User Registered Successfully', summary: 'SUCCESS', duration: 3000 });
          this.teacherForm.reset();
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
    return this.teacherForm.get('fullName') as FormControl;
  }

  get emailControl() {
    return this.teacherForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.teacherForm.get('password') as FormControl;
  }
}
