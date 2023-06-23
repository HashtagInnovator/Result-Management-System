import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormRecord } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordServiceService } from '../../services/record-service.service';
import {NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/services/data.service';
import { LogoutDialogComponent } from '../../logout-dialog.component';
import { MatDialog } from '@angular/material/dialog'; 

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss']
})
export class TeacherHomeComponent {
  addRecordForm!:FormGroup;
  dateOfBirthControl!: FormControl;
  constructor(private formbuilder:FormBuilder, private router:Router, private api:RecordServiceService, private toast:NgToastService,
    private dataService: DataService,
    private dialog: MatDialog)
  {
    this.addRecordForm = this.formbuilder.group({
      rollNumber:'',
      fullName:'',
      dateOfBirth:'',
      scoreNumber:''
  })
  this.dateOfBirthControl = this.addRecordForm.get('dateOfBirth') as FormControl;
}

logout() {
  const dialogRef = this.dialog.open(LogoutDialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.router.navigate(['/teacher-login']);
    }
  });
}
addRecord()
{
  this.api.postRegisteration(this.addRecordForm.value).subscribe(response => {
    // Handle the response if needed
    console.log('API call success:', response);
    this.toast.success({detail:"Success", summary:"Recrord Added Successfully", duration:3000 });
    this.addRecordForm.reset();
  }, error => {
    // Handle the error if needed
    console.error('API call error:', error);
  }
  );
    
  console.log('addREcoreds triggerred');
  console.log(this.addRecordForm.value);
}
clearRecord()
{
  this.addRecordForm.reset();
}
onDateOfBirthInput(dateString: string) {
  const dateParts = dateString.split('-');
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  const formattedDateOfBirth = `${day}/${month}/${year}`;
  this.dateOfBirthControl.setValue(formattedDateOfBirth);
}
}
