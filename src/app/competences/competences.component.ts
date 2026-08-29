import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-competences',
  imports: [TranslatePipe, MatCardModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {
  constructor(private translate: TranslateService) {}

  getLevel(skill: unknown): number {
    if (typeof skill === 'object' && skill !== null && 'level' in skill && typeof skill.level === 'number') {
      return Math.min(3, Math.max(1, skill.level));
    }
    return 2;
  }

  getLevelLabel(level: number): string {
    return ['SKILLS.HTML.LEVEL-BEGINNER', 'SKILLS.HTML.LEVEL-INTERMEDIATE', 'SKILLS.HTML.LEVEL-PROFESSIONAL'][level - 1]
      ?? 'SKILLS.HTML.LEVEL-INTERMEDIATE';
  }

  frameworks = [
    { img: 'assets/images/angular_icon.png', name: 'Angular', alt: 'SKILLS.TS.FRAMEWORKS-ANGULAR-ALT', width: 100, level: 3 },
    { img: 'assets/images/flutter_icon.png', name: 'Flutter', alt: 'SKILLS.TS.FRAMEWORKS-FLUTTER-ALT', width: 100, level: 1 },
    { img: 'assets/images/django_icon.png', name: 'Django', alt: 'SKILLS.TS.FRAMEWORKS-DJANGO-ALT', width: 100, level: 2 },
    { img: 'assets/images/springBoot_icon.png', name: 'Spring Boot', alt: 'SKILLS.TS.FRAMEWORKS-SPRINGBOOT-ALT', width: 100, level: 3 },
  ]
  languagesSpoken = [
    { img: 'assets/images/franceFlag_icon.png', name: 'SKILLS.TS.LANGUAGE-SPOKEN-FRENCH', alt: 'SKILLS.TS.LANGUAGE-SPOKEN-FRENCH-ALT', width: 100, level: 3 },
    { img: 'assets/images/unitedKingdomFlag_icon.png', name: 'SKILLS.TS.LANGUAGE-SPOKEN-ENGLISH', alt: 'SKILLS.TS.LANGUAGE-SPOKEN-ENGLISH-ALT', width: 100, level: 3 },
    { img: 'assets/images/spainFlag_icon.png', name: 'SKILLS.TS.LANGUAGE-SPOKEN-SPANISH', alt: 'SKILLS.TS.LANGUAGE-SPOKEN-SPANISH-ALT', width: 100, level: 1 },
  ]
  languagesProgramming = [
    { img: 'assets/images/java_icon.png', name: 'Java', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-JAVA-ALT', width: 100, level: 3 },
    { img: 'assets/images/javascript_icon.png', name: 'JavaScript', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-JAVASCRIPT-ALT', width: 100, level: 2 },
    { img: 'assets/images/typescript_icon.png', name: 'TypeScript', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-TYPESCRIPT-ALT', width: 100, level: 3 },
    { img: 'assets/images/html5_icon.png', name: 'HTML', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-HTML-ALT', width: 100, level: 3 },
    { img: 'assets/images/css_icon.png', name: 'CSS', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-CSS-ALT', width: 100, level: 3 },
    { img: 'assets/images/sql_icon.png', name: 'SQL', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-SQL-ALT', width: 120, level: 2 },
    { img: 'assets/images/python_icon.png', name: 'Python', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-PYTHON-ALT', width: 100, level: 3 },
    { img: 'assets/images/c_icon.png', name: 'C', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-C-ALT', width: 100, level: 2 },
    { img: 'assets/images/cSharp_icon.png', name: 'C#', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-C#-ALT', width: 100, level: 3 },
    { img: 'assets/images/php_icon.png', name: 'PHP', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-PHP-ALT', width: 100, level: 2 },
    { img: 'assets/images/dart_icon.png', name: 'Dart', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-DART-ALT', width: 100, level: 1 },
    { img: 'assets/images/xml_icon.png', name: 'XML', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-XML-ALT', width: 100, level: 3 },
    { img: 'assets/images/LaTex_icon.png', name: 'LaTex', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-LATEX-ALT', width: 100, level: 3 },
    { img: 'assets/images/R_icon.png', name: 'R', alt: 'SKILLS.TS.PROGRAMMING-LANGUAGE-R-ALT', width: 100, level: 2 },
  ]
  ide = [
    { img: 'assets/images/intelliJ_icon.png', name: 'IntelliJ', alt: 'SKILLS.TS.IDE-INTELLIJ-ALT', width: 100, level: 3 },
    { img: 'assets/images/VSCode_icon.png', name: 'VS Code', alt: 'SKILLS.TS.IDE-VSCODE-ALT', width: 100, level: 3 },
    { img: 'assets/images/androidStudio_icon.png', name: 'Android Studio', alt: 'SKILLS.TS.IDE-ANDROID-STUDIO-ALT', width: 100, level: 3 },
    { img: 'assets/images/pycharm_icon.png', name: 'PyCharm', alt: 'SKILLS.TS.IDE-PYCHARM-ALT', width: 100, level: 3 },
    { img: 'assets/images/webstorm_icon.png', name: 'WebStorm', alt: 'SKILLS.TS.IDE-WEBSTORM-ALT', width: 100, level: 3 },
    { img: 'assets/images/rider_icon.png', name: 'Rider', alt: 'SKILLS.TS.IDE-RIDER-ALT', width: 100, level: 3 },
    { img: 'assets/images/rStudio_icon.png', name: 'RStudio', alt: 'SKILLS.TS.IDE-RSTUDIO-ALT', width: 100, level: 2 },
  ]
  gameEngines = [
    { img: 'assets/images/unity_icon.png', name: 'Unity', alt: 'SKILLS.TS.GAME-ENGINE-UNITY-ALT', width: 100, level: 2 },
    { img: 'assets/images/godotGameEngine_icon.png', name: 'Godot', alt: 'SKILLS.TS.GAME-ENGINE-GODOT-ALT', width: 100, level: 3 },
  ]
  operatingSystems = [
    { img: 'assets/images/windows_icon.png', name: 'Windows', alt: 'SKILLS.TS.OS-WINDOWS-ALT', width: 100, level: 3 },
    { img: 'assets/images/linux_icon.png', name: 'Linux', alt: 'SKILLS.TS.OS-LINUX-ALT', width: 100, level: 2 },
    { img: 'assets/images/macOS_icon.png', name: 'Mac OS', alt: 'SKILLS.TS.OS-MAC-ALT', width: 100, level: 3 },
  ]
  gitTools = [
    { img: 'assets/images/git_icon.png', name: 'Git', alt: 'SKILLS.TS.GIT-TOOLS-GIT-ALT', width: 100, level: 3 },
    { img: 'assets/images/github_icon.png', name: 'GitHub', alt: 'SKILLS.TS.GIT-TOOLS-GITHUB-ALT', width: 100, level: 3 },
    { img: 'assets/images/gitlab_icon.png', name: 'GitLab', alt: 'SKILLS.TS.GIT-TOOLS-GITLAB-ALT', width: 100, level: 3 },
    { img: 'assets/images/gitkraken_icon.png', name: 'GitKraken', alt: 'SKILLS.TS.GIT-TOOLS-GITKRAKEN-ALT', width: 100, level: 3 },
  ]
  buildingTools = [
    { img: 'assets/images/gradle_icon.png', name: 'Gradle', alt: 'SKILLS.TS.BUILDING-TOOLS-GRADLE-ALT', width: 100, level: 3 },
    { img: 'assets/images/maven_icon.png', name: 'Maven', alt: 'SKILLS.TS.BUILDING-TOOLS-MAVEN-ALT', width: 100, level: 3 },
  ]
  dbManagementSystems = [
    { img: 'assets/images/Postgresql_icon.png', name: 'PostgreSQL', alt: 'SKILLS.TS.DB-MANAGEMENT-SYSTEM-POSTGRESQL-ALT', width: 100, level: 3 },
    { img: 'assets/images/Oracle_icon.png', name: 'Oracle', alt: 'SKILLS.TS.DB-MANAGEMENT-SYSTEM-ORACLE-ALT', width: 100, level: 2 },
  ]
  serviceProviders = [
    { img: 'assets/images/Firebase_icon.png', name: 'Firebase', alt: 'SKILLS.TS.SERVICE-PROVIDERS-FIREBASE-ALT', width: 100, level: 2 },
  ]
  cloudComputingPlatforms = [
    { img: 'assets/images/GoogleCloudPlatform_icon.png', name: 'Google Cloud Platform', alt: 'SKILLS.TS.CLOUD-COMPUTING-PLATFORMS-GCP-ALT', width: 100, level: 2 },
    { img: 'assets/images/MicrosoftAzure_icon.png', name: 'Microsoft Azure', alt: 'SKILLS.TS.CLOUD-COMPUTING-PLATFORMS-MA-ALT', width: 100, level: 2 },
  ]
  diverseTalentJobRelated = [
    { img: 'assets/images/overleaf_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-OVERLEAF', alt: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-OVERLEAF-ALT', width: 100, level: 3 },
    { img: 'assets/images/machineLearning_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-MACHINE-LEARNING', alt: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-MACHINE-LEARNING-ALT', width: 100, level: 3 },
    { img: 'assets/images/LLM-basedAgents_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-LLM-BASED-AGENTS', alt: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-LLM-BASED-AGENTS-ALT', width: 100, level: 3 },
    { img: 'assets/images/LargeLanguageModel_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-LLM', alt: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-LLM-ALT', width: 100, level: 3 },
    { img: 'assets/images/arduino_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-ARDUINO', alt: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-ARDUINO-ALT', width: 100, level: 2 },
    { img: 'assets/images/onshape_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-ONSHAPE', alt: 'SKILLS.TS.DIVERSE-TALENTS-JOB-RELATED-ONSHAPE-ALT', width: 100, level: 2 },
  ]
  diverseTalent = [
    { img: 'assets/images/word_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-WORD', alt: 'SKILLS.TS.DIVERSE-TALENTS-WORD-ALT', width: 100, level: 3 },
    { img: 'assets/images/excel_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-EXCEL', alt: 'SKILLS.TS.DIVERSE-TALENTS-EXCEL-ALT', width: 100, level: 3 },
    { img: 'assets/images/powerPoint_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-POWERPOINT', alt: 'SKILLS.TS.DIVERSE-TALENTS-POWERPOINT-ALT', width: 100, level: 3 },
    { img: 'assets/images/microSoudure_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-MICRO-WELDING', alt: 'SKILLS.TS.DIVERSE-TALENTS-MICRO-WELDING-ALT', width: 100, level: 2 },
    { img: 'assets/images/physicalStrenght_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-PHYSICAL-STRENGTH', alt: 'SKILLS.TS.DIVERSE-TALENTS-PHYSICAL-STRENGTH-ALT', width: 100, level: 3 },
    { img: 'assets/images/perfectionniste_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-PERFECTIONISM', alt: 'SKILLS.TS.DIVERSE-TALENTS-PERFECIONISM-ALT', width: 100, level: 3 },
    { img: 'assets/images/Charismatic_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-CHARISMATIC', alt: 'SKILLS.TS.DIVERSE-TALENTS-CHARISMATIC-ALT', width: 100, level: 3 },
    { img: 'assets/images/Autonome_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-AUTONOMOUS', alt: 'SKILLS.TS.DIVERSE-TALENTS-AUTONOMOUS-ALT', width: 100, level: 3 },
    { img: 'assets/images/TeamWork_icon.png', name: 'SKILLS.TS.DIVERSE-TALENTS-TEAMWORK', alt: 'SKILLS.TS.DIVERSE-TALENTS-TEAMWORK-ALT', width: 100, level: 3 },
  ]
}
