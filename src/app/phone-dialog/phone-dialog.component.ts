import { Component } from '@angular/core';
import { MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import {TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-phone-dialog',
  imports: [TranslatePipe, MatDialogContent, MatDialogTitle],
  template: `
    <h2 mat-dialog-title>{{ 'PHONE-DIALOG.TS.TITLE' | translate }}</h2>
    <mat-dialog-content>
      {{ 'PHONE-DIALOG.TS.TEXT' | translate }}
    </mat-dialog-content>
  `
})
export class PhoneDialogComponent {
  constructor(private translate: TranslateService) {}
}
