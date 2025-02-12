import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [MatCardModule, CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  experiences_diverses = [
    { img: 'assets/images/roboticZone01_icon.png', years: '2019-2020', name: 'Robotique Zone01',
      discipline: 'World Robot Olympiad', info: 'Finaliste du championnat canadien', alt: 'Robotique Zone01 logo', width: 100 },
    { img: 'assets/images/codejam_icon.png', years: '2022', name: 'Codejam12',
      discipline: 'Choix libre', info: 'Participant de la douzième édition de Codejam', alt: 'Codejam12 logo', width: 100 },
  ]

  experiences_professionnelles = [
    { img: 'assets/images/equipementCLesage_icon.png', years: '2016-2020', job: 'Préposé à l\'entretien extérieur',
      name: 'Équipement C. Lesage', reference_name: 'Mme. Michelle Lesage', reference_phone: '+1 (819) 228-5694',
      reference_job: 'Patronne', alt: 'Équipement C. Lesage logo', width: 100 },
    { img: 'assets/images/reboisementMauricie_icon.png', years: '2022-2023', job: 'Entretien et soin des plants',
      name: 'Reboisement Mauricie', reference_name: 'Mme. Véronique Gélinas', reference_phone: '+1 (819) 374-3633',
      reference_job: 'Supérieur', alt: 'Reboisement Mauricie logo', width: 100 },
    { img: 'assets/images/nicolet_icon.png', years: 'été 2024', job: 'Développeur en IA, stage en informatique',
      name: 'Ville de Nicolet', reference_name: 'Mme. Stéphanie Dufresne',
      reference_job: 'Coordonatrice du bureau de la transition écologique et de l\'innovation sociale',
      reference_phone: '+1 (819) 293-6901, poste 1104', alt: 'Ville de Nicolet logo', width: 100 },
  ]
}
