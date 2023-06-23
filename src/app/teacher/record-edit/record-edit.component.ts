import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordServiceService } from 'src/app/services/record-service.service';
import { NgToastService } from 'ng-angular-popup';
import { records } from 'src/app/models/records.model';

@Component({
  selector: 'record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.css']
})
export class RecordEditComponent implements OnInit {
  editRecordForm!: FormGroup;
  public updateDetails!: number;
  public record!: records; // <-- Updated type

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private api: RecordServiceService,
    private toast: NgToastService,
    private activatedRouter: ActivatedRoute
  ) {
    this.editRecordForm = this.formbuilder.group({
      id:'',
      rollNumber: '',
      fullName: '',
      dateOfBirth: '',
      scoreNumber: ''
    });
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((val) => {
      this.updateDetails = val['id'];
      this.api.getRegisteredUserId(this.updateDetails).subscribe((res) => {
        this.record = res; // Assign the response to the record property
        this.fillFormDetails();
      });
    });
  }

  fillFormDetails() {
    this.editRecordForm.setValue({
      id:this.record.id,
      rollNumber: this.record.rollNumber,
      fullName: this.record.fullName,
      dateOfBirth: this.record.dateOfBirth,
      scoreNumber: this.record.scoreNumber
    });
  }

  editRecord() {
    // Retrieve the updated values from the form
    const updatedRecord: records = {
      id:this.editRecordForm.value.id,
      rollNumber: this.editRecordForm.value.rollNumber,
      fullName: this.editRecordForm.value.fullName,
      dateOfBirth: this.editRecordForm.value.dateOfBirth,
      scoreNumber: this.editRecordForm.value.scoreNumber
    };

    // Call the API service to update the record
    this.api.updateRegisteredUser(updatedRecord, this.updateDetails).subscribe(
      (response) => {
        // Handle the response if needed
        console.log('API call success:', response);
        this.toast.success({ detail: 'Success', summary: 'Record Updated Successfully', duration: 3000 });
        // Reset the form if desired
          
      },
      (error) => {
        // Handle the error if needed
        console.error('API call error:', error);
      }
    );
  }
}
