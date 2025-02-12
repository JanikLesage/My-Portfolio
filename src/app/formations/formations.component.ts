import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formations',
  imports: [MatCardModule, CommonModule],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent {
  schools = [
    { img: 'assets/images/collegeLafleche_icon.png', years: '2020-2022', name: 'Collège Laflèche', programme: 'Science naturelle', alt: 'Collège Laflèche logo', width: 100 },
    { img: 'assets/images/UQTR_icon.png', years: '2022-2025', name: 'Université du Québec à Trois-Rivières', programme: 'Baccalauréat en Informatique', alt: 'UQTR logo', width: 100 },
  ]
}

