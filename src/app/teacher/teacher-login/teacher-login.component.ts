import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { teachers } from 'src/app/models/teachers.model';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent {
  teacherLoginForm!: FormGroup;
  loginError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private teacherService: TeacherService,
    private toast:NgToastService
  ) {
    this.teacherLoginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  // ...

  Login() {
    const email = this.emailControl.value;
    const password = this.passwordControl.value;

    this.teacherService.login(email, password).subscribe(
      (user: teachers | null) => {
        if (user) {
          
          console.log('Login successful:', user);
          this.loginError = false;
          this.router.navigate(['/teacher-home']);
        } else {
          
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
    return this.teacherLoginForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.teacherLoginForm.get('password') as FormControl;
  }
}
