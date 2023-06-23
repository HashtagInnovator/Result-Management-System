import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { records } from 'src/app/models/records.model';
import { RecordServiceService } from 'src/app/services/record-service.service';
import { DataService } from 'src/app/services/data.service';
import { LogoutDialogComponent } from '../../logout-dialog.component';
import { MatDialog } from '@angular/material/dialog'; 

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent {
  studentSearchForm!: FormGroup;
  loginError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private recordService: RecordServiceService,
    private toast: NgToastService,
    private router: Router,
    private dataService: DataService,
    private dialog: MatDialog
  ) {
    this.studentSearchForm = this.formBuilder.group({
      rollNumber: '',
      dateOfBirth: ''
    });
  }

  logout() {
    const dialogRef = this.dialog.open(LogoutDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/student-login']);
      }
    });
  }

  Search() {
    const rollNumber = this.rollNumberControl.value;
    const dateOfBirth = this.dateOfBirthControl.value;

    this.recordService.search(rollNumber, dateOfBirth).subscribe(
      (user: records | null) => {
        if (user) {
          console.log(user); // Print user data to the console
          this.dataService.setData(user.fullName, user.rollNumber, user.scoreNumber, user.dateOfBirth);
          this.router.navigate(['/student-score']);
        } else {
          this.toast.error({ detail: "Failed", summary: "RollNumber and Date of Birth not matched", duration: 4000 });
          console.log('No matching record found.');
          this.loginError = true;
        }
      },
      (error: any) => {
        console.error('Search error:', error);
      }
    );
  }

  // Getter methods for form controls
  get rollNumberControl() {
    return this.studentSearchForm.get('rollNumber') as FormControl;
  }

  get dateOfBirthControl() {
    return this.studentSearchForm.get('dateOfBirth') as FormControl;
  }
}
