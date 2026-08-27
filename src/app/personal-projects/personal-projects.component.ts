import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-personal-projects',
  imports: [TranslatePipe, MatCardModule, CommonModule, MatButtonModule, MatIconModule, MatExpansionModule],
  templateUrl: './personal-projects.component.html',
  styleUrl: './personal-projects.component.css'
})
export class PersonalProjectsComponent {

  languages = [
    { name: 'Python', color: 'green'},
    { name: 'HTML', color: 'red'},
    { name: 'CSS', color: 'blue'},
    { name: 'JavaScript', color: 'yellow'},
    { name: 'TypeScript', color: 'purple'},
    { name: 'Java', color: 'orange'},
    { name: 'JavaFx', color: 'indigo'},
    { name: 'C', color: 'cyan'},
    { name: 'C++', color: 'pink'},
    { name: 'C#', color: 'brown'},
    { name: 'PHP', color: 'black'},
    { name: 'SQL', color: 'white'},
    { name: 'Ruby', color: 'gray'},
    { name: 'Swift', color: 'cyan'},
    { name: 'Kotlin', color: 'magenta'},
    { name: 'Rust', color: 'olive'},
    { name: 'Go', color: 'teal'},
    { name: 'Scala', color: 'navy'},
    { name: 'Perl', color: 'maroon'},
    { name: 'Haskell', color: 'lime'},
    { name: 'Lua', color: 'fuchsia'},
    { name: 'R', color: 'silver'},
    { name: 'Matlab', color: 'gold'},
    { name: 'Assembly', color: 'crimson'},
    { name: 'Shell', color: 'coral'},
    { name: 'PowerShell', color: 'ivory'},
    { name: 'Dart', color: 'wheat'},
    { name: 'Objective-C', color: 'khaki'},
    { name: 'VBA', color: 'plum'},
    { name: 'Groovy', color: 'orchid'},
    { name: 'Elixir', color: 'lavender'},
    { name: 'Clojure', color: 'salmon'},
    { name: 'Erlang', color: 'lightcoral'},
    { name: 'Julia', color: 'darkred'},
    { name: 'F#', color: 'firebrick'},
    { name: 'OCaml', color: 'rosybrown'},
    { name: 'Scheme', color: 'saddlebrown'},
    { name: 'Ada', color: 'sienna'},
    { name: 'Lisp', color: 'chocolate'},
    { name: 'Prolog', color: 'peru'},
  ]

  personal_projects = [
    { title: 'PROJECTS.TS.PROJECTS-CHESS-GAME', short_description: 'PROJECTS.TS.PROJECTS-CHESS-GAME-SHORT-DESCRIPTION', description: "PROJECTS.TS.PROJECTS-CHESS-GAME-DESCRIPTION", languages: ['Java', 'JavaFx'], 
      images: ['assets/images/echec_proj.png', 'assets/images/echec1_proj.png', 'assets/images/echec2_proj.png']},

    { title: 'PROJECTS.TS.PROJECTS-MATRIX', short_description: 'PROJECTS.TS.PROJECTS-MATRIX-SHORT-DESCRIPTION', description: "PROJECTS.TS.PROJECTS-MATRIX-DESCRIPTION", languages: ['C#'], 
      images: ['assets/images/matrice_proj.png', 'assets/images/matrice1_proj.png']},

    { title: 'PROJECTS.TS.PROJECTS-SERIALIZE', short_description: 'PROJECTS.TS.PROJECTS-SERIALIZE-SHORT-DESCRIPTION', description: "PROJECTS.TS.PROJECTS-SERIALIZE-DESCRIPTION", languages: ['Java'], 
      images: ['assets/images/serializeJson_proj.png', 'assets/images/deserializeJson_proj.png']},

    { title: 'PROJECTS.TS.PROJECTS-NICOLET', short_description: 'PROJECTS.TS.PROJECTS-NICOLET-SHORT-DESCRIPTION', description: "PROJECTS.TS.PROJECTS-NICOLET-DESCRIPTION", languages: ['Python'], 
      images: ['assets/images/nicolet_proj.png', 'assets/images/nicolet1_proj.png', 'assets/images/nicolet2_proj.png']},

    { title: 'PROJECTS.TS.PROJECTS-BEAUDOIN', short_description: 'PROJECTS.TS.PROJECTS-BEAUDOIN-SHORT-DESCRIPTION', description: "PROJECTS.TS.PROJECTS-BEAUDOIN-DESCRIPTION", languages: ['Python'], 
      images: ['assets/images/Agent-Beaudoin-UI.png', 'assets/images/Agent-Beaudoin-Input.png', 'assets/images/Agent-Beaudoin-Output.png']},

    { title: 'PROJECTS.TS.PROJECTS-MASTERS', short_description: 'PROJECTS.TS.PROJECTS-MASTERS-SHORT-DESCRIPTION', description: "PROJECTS.TS.PROJECTS-MASTERS-DESCRIPTION", languages: ['Python'], 
      images: null},
    { title: 'PROJECTS.TS.PROJECTS-WINDOWS-BMR', short_description: 'PROJECTS.TS.PROJECTS-WINDOWS-BMR-SHORT-DESCRIPTION', description: "PROJECTS.TS.PROJECTS-WINDOWS-BMR-DESCRIPTION", languages: ['Python'],
      images: null}
  ]

  getLanguageColor(name: string): string {
    return this.languages.find(lang => lang.name === name)?.color || 'black';
  }

  imageIndexes = new Map<string, number>();
  expandedProjects = new Map<string, boolean>();

  constructor(private translate: TranslateService) {
      this.personal_projects.forEach(project => {
      this.imageIndexes.set(project.title, 0);
      this.expandedProjects.set(project.title, false);
    })
  }

  toggleExpand(title: string) {
    const currentState = this.expandedProjects.get(title) ?? false;
    this.expandedProjects.set(title, !currentState);
  }

  isExpanded(title: string): boolean {
    return this.expandedProjects.get(title) ?? false;
  }

  prevImage(title: string, images: string[]) {
    const currentIndex = this.imageIndexes.get(title) ?? 0;
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    this.imageIndexes.set(title, newIndex);
  }

  nextImage(title: string, images: string[]) {
    const currentIndex = this.imageIndexes.get(title) ?? 0;
    const newIndex = (currentIndex + 1) % images.length;
    this.imageIndexes.set(title, newIndex);
  }
}
