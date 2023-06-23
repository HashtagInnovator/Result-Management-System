import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { records } from 'src/app/models/records.model';
import { RecordServiceService } from 'src/app/services/record-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-records',
  templateUrl: './student-records.component.html',
  styleUrls: ['./student-records.component.scss']
})
export class StudentRecordsComponent implements OnInit {
  public dataSource!: MatTableDataSource<records>;
  public record!: records[];
  public data!: string[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['rollNumber', 'fullName', 'dateOfBirth', 'scoreNumber', 'action'];

  constructor(private api: RecordServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.api.getRegisteredUser().subscribe(res => {
      this.record = res;
      this.dataSource = new MatTableDataSource(this.record);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editDetails(id: number) {
    this.router.navigate(['/record-edit', id]); // Pass the ID to the edit route
  }

  deleteRecord(id: number) {
    this.api.deleteRegistered(id).subscribe(
      () => {
        // Delete record from the table
        const index = this.record.findIndex(record => record.id === id);
        if (index !== -1) {
          this.record.splice(index, 1);
          this.dataSource.data = this.record;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error => {
        // Handle error if needed
        console.error('Error deleting record:', error);
      }
    );
  }
}
