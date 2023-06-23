import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-student-score',
  templateUrl: './student-score.component.html',
  styleUrls: ['./student-score.component.scss']
})
export class StudentScoreComponent implements OnInit {
  name!: string;
  roll!: number;
  score!: number;
  date!:Date;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    const data = this.dataService.getData();
    if (data) {
      this.name = data.name;
      this.roll = data.roll;
      this.score = data.score;
      this.date = data.dateOfBirth;
    }
  }
  back()
  {
    this.router.navigate(['/student-search']);
  }
}
