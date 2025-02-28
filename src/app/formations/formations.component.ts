import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-formations',
  imports: [TranslatePipe, MatCardModule, CommonModule],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent {
  constructor(private translate: TranslateService) {}

  schools = [
    { img: 'assets/images/collegeLafleche_icon.png', years: '2020-2022', name: 'FORMATION.TS.SCHOOL-COLLEGE-LAFLECHE', programme: 'FORMATION.TS.SCHOOL-COLLEGE-LAFLECHE-PROGRAM', alt: 'FORMATION.TS.SCHOOL-COLLEGE-LAFLECHE-ALT', width: 100 },
    { img: 'assets/images/UQTR_icon.png', years: '2022-2025', name: 'FORMATION.TS.SCHOOL-UQTR-BACC', programme: 'FORMATION.TS.SCHOOL-UQTR-BACC-PROGRAM', alt: 'FORMATION.TS.SCHOOL-UQTR-BACC-ALT', width: 100 },
    { img: 'assets/images/UQTR_icon.png', years: '2025-2027', name: 'FORMATION.TS.SCHOOL-UQTR-MASTERS', programme: 'FORMATION.TS.SCHOOL-UQTR-MASTERS-PROGRAM', alt: 'FORMATION.TS.SCHOOL-UQTR-MASTERS-ALT', width: 100 },
  ]
}

