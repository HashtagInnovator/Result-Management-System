import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { student } from 'src/app/models/student.model';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent {
  studentLoginForm!: FormGroup;
  loginError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService,
    private toast:NgToastService
  ) {
    this.studentLoginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  // ...

  Login() {
    const email = this.emailControl.value;
    const password = this.passwordControl.value;

    this.studentService.login(email, password).subscribe(
      (user: student | null) => {
        if (user) {
          // Login successful
          console.log('Login successful:', user);
          this.loginError = false;
          this.router.navigate(['/student-search']);
        } else {
          // Login failed
          console.error('Invalid email or password');
          this.toast.error({detail:"Failed", summary:"Incorrect Password or Email address", duration:4000});
          this.loginError = true;
        }
      },
      (error: any) => {
        console.error('Login error:', error);
        this.loginError = true;
      }
    );
  }

// ...


  // Getter methods for form controls
  get emailControl() {
    return this.studentLoginForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.studentLoginForm.get('password') as FormControl;
  }
}
