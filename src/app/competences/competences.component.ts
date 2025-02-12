import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-competences',
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {

  frameworks = [
    { img: 'assets/images/angular_icon.png', name: 'Angular', alt: 'Angular logo', width: 100 },
    { img: 'assets/images/flutter_icon.png', name: 'Flutter', alt: 'Flutter logo', width: 100 },
    { img: 'assets/images/django_icon.png', name: 'Django', alt: 'Django logo', width: 100 },
  ]
  languagesSpoken = [
    { img: 'assets/images/franceFlag_icon.png', name: 'French', alt: 'French flag', width: 100 },
    { img: 'assets/images/unitedKingdomFlag_icon.png', name: 'English', alt: 'English flag', width: 100 },
    { img: 'assets/images/spainFlag_icon.png', name: 'Spanish', alt: 'Spanish flag', width: 100 },
  ]
  languagesProgramming = [
    { img: 'assets/images/java_icon.png', name: 'Java', alt: 'Java logo', width: 100 },
    { img: 'assets/images/javascript_icon.png', name: 'JavaScript', alt: 'JavaScript logo', width: 100 },
    { img: 'assets/images/typescript_icon.png', name: 'TypeScript', alt: 'TypeScript logo', width: 100 },
    { img: 'assets/images/html5_icon.png', name: 'HTML', alt: 'HTML logo', width: 100 },
    { img: 'assets/images/css_icon.png', name: 'CSS', alt: 'CSS logo', width: 100 },
    { img: 'assets/images/sql_icon.png', name: 'SQL', alt: 'SQL logo', width: 120 },
    { img: 'assets/images/python_icon.png', name: 'Python', alt: 'Python logo', width: 100 },
    { img: 'assets/images/c_icon.png', name: 'C', alt: 'C logo', width: 100 },
    { img: 'assets/images/cSharp_icon.png', name: 'C#', alt: 'C# logo', width: 100 },
    { img: 'assets/images/php_icon.png', name: 'PHP', alt: 'PHP logo', width: 100 },
    { img: 'assets/images/dart_icon.png', name: 'Dart', alt: 'Dart logo', width: 100 },
    { img: 'assets/images/xml_icon.png', name: 'XML', alt: 'XML logo', width: 100 },
  ]
  ide = [
    { img: 'assets/images/intelliJ_icon.png', name: 'IntelliJ', alt: 'IntelliJ logo', width: 100 },
    { img: 'assets/images/VSCode_icon.png', name: 'VS Code', alt: 'VS Code logo', width: 100 },
    { img: 'assets/images/androidStudio_icon.png', name: 'Android Studio', alt: 'Android Studio logo', width: 100 },
    { img: 'assets/images/pycharm_icon.png', name: 'PyCharm', alt: 'PyCharm logo', width: 100 },
    { img: 'assets/images/webstorm_icon.png', name: 'WebStorm', alt: 'WebStorm logo', width: 100 },
    { img: 'assets/images/rider_icon.png', name: 'Rider', alt: 'Rider logo', width: 100 },
  ]
  gameEngines = [
    { img: 'assets/images/unity_icon.png', name: 'Unity', alt: 'Unity logo', width: 100 },
  ]
  operatingSystems = [
    { img: 'assets/images/windows_icon.png', name: 'Windows', alt: 'Windows logo', width: 100 },
    { img: 'assets/images/linux_icon.png', name: 'Linux', alt: 'Linux logo', width: 100 },
    { img: 'assets/images/macOS_icon.png', name: 'Mac OS', alt: 'Mac OS logo', width: 100 },
  ]
  gitTools = [
    { img: 'assets/images/git_icon.png', name: 'Git', alt: 'Git logo', width: 100 },
    { img: 'assets/images/github_icon.png', name: 'GitHub', alt: 'GitHub logo', width: 100 },
    { img: 'assets/images/gitlab_icon.png', name: 'GitLab', alt: 'GitLab logo', width: 100 },
    { img: 'assets/images/gitkraken_icon.png', name: 'GitKracken', alt: 'GitKracken logo', width: 100 },
  ]
  diverseTalent = [
    { img: 'assets/images/AI_icon.png', name: 'Intelligence artificielle', alt: 'Intelligence artificielle logo', width: 100 },
    { img: 'assets/images/arduino_icon.png', name: 'Arduino', alt: 'Arduino logo', width: 100 },
    { img: 'assets/images/word_icon.png', name: 'Word', alt: 'Word logo', width: 100 },
    { img: 'assets/images/excel_icon.png', name: 'Excel', alt: 'Excel logo', width: 100 },
    { img: 'assets/images/powerPoint_icon.png', name: 'PowerPoint', alt: 'PowerPoint logo', width: 100 },
    { img: 'assets/images/onshape_icon.png', name: 'OnShape', alt: 'OnShape logo', width: 100 },
    { img: 'assets/images/microSoudure_icon.png', name: 'Micro-soudure', alt: 'Micro-soudure logo', width: 100 },
    { img: 'assets/images/physicalStrenght_icon.png', name: 'Force physique', alt: 'Force physique logo', width: 100 },
    { img: 'assets/images/perfectionniste_icon.png', name: 'Perfectionniste', alt: 'Perfectionniste logo', width: 100 },
  ]
}
