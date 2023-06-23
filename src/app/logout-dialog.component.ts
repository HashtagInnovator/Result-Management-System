import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
})
export class LogoutDialogComponent {

  constructor(public dialogRef: MatDialogRef<LogoutDialogComponent>) { }

}
