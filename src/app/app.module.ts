import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherSignupComponent } from './teacher/teacher-signup/teacher-signup.component';
import { TeacherLoginComponent } from './teacher/teacher-login/teacher-login.component';
import { StudentSignupComponent } from './student/student-signup/student-signup.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TeacherHomeComponent } from './teacher/teacher-home/teacher-home.component';import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule } from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatTab, MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { StudentRecordsComponent } from './teacher/student-records/student-records.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { RecordEditComponent } from './teacher/record-edit/record-edit.component';
import { StudentSearchComponent } from './student/student-search/student-search.component';
import { StudentScoreComponent } from './student/student-score/student-score.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../app/logout-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherSignupComponent,
    TeacherLoginComponent,
    StudentSignupComponent,
    StudentLoginComponent,
    TeacherHomeComponent,
    StudentRecordsComponent,
    RecordEditComponent,
    StudentSearchComponent,
    StudentScoreComponent,
    LogoutDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgToastModule,
    NgConfirmModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDividerModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DatePipe,
    MatDialogModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
