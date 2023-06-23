import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherLoginComponent } from './teacher/teacher-login/teacher-login.component';
import { TeacherSignupComponent } from './teacher/teacher-signup/teacher-signup.component';
import { TeacherHomeComponent } from './teacher/teacher-home/teacher-home.component';
import { RecordEditComponent } from './teacher/record-edit/record-edit.component';
import { StudentSearchComponent } from './student/student-search/student-search.component';
import { StudentScoreComponent } from './student/student-score/student-score.component';
import { StudentSignupComponent } from './student/student-signup/student-signup.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';

const routes: Routes = [  
  { path: 'teacher-signup', component: TeacherSignupComponent },
  { path: 'teacher-login', component: TeacherLoginComponent },
  { path: 'teacher-home', component: TeacherHomeComponent },
  {path:'record-edit/:id', component: RecordEditComponent},
  {path:'student-search', component:StudentSearchComponent},
  {path:'student-score', component:StudentScoreComponent},
  {path:'student-signup', component:StudentSignupComponent},
  {path:'student-login', component:StudentLoginComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/teacher-signup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
