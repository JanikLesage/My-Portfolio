import { Component } from '@angular/core';
import { MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-phone-dialog',
  imports: [MatDialogContent, MatDialogTitle],
  template: `
    <h2 mat-dialog-title>Vous devez être sur mobile!</h2>
    <mat-dialog-content>
      Appeler moi au +1 (819) 698-6349
    </mat-dialog-content>
  `
})
export class PhoneDialogComponent {}
