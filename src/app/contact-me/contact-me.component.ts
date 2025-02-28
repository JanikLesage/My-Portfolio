import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { PhoneDialogComponent } from '../phone-dialog/phone-dialog.component';
import {TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  imports: [TranslatePipe, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  constructor(public dialog: MatDialog, private translate: TranslateService) {}

  callPhone(): void {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = 'tel:+18196986349';
    } else {
      this.dialog.open(PhoneDialogComponent);
      }
  }
}
