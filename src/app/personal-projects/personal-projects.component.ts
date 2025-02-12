import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-personal-projects',
  imports: [MatCardModule, CommonModule, MatButtonModule, MatIconModule, MatExpansionModule],
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
    { title: 'Jeu d\'échecs', short_description: 'Défiez vos amis dans un jeu d\'échecs.', languages: ['Java', 'JavaFx'], images: ['assets/images/echec_proj.png', 'assets/images/echec1_proj.png', 'assets/images/echec2_proj.png'],
    description: 'Conçu dans le cadre universitaire, ce jeu d\'échecs permet à deux joueurs de s\'affronter sur un plateau de jeu en 2D. Le jeu offre la possibilité de changer les couleurs des dalles comme tout joueur les veulent, de recommencer une partie, de voir les coups possibles pour une pièce sélectionnée et de voir les coups joués.'},
    { title: 'Résolution de matrices', short_description: 'Application console permettant de résoudre des matrices en utilisant diverses méthodes.', languages: ['C#'], images: ['assets/images/matrice_proj.png', 'assets/images/matrice1_proj.png'],
    description: 'Conçu dans le cadre universitaire, cette application console permet de résoudre des matrices selon diverses méthodes, telles que la méthode de Gauss, la méthode de Gauss-Jordan, la méthode de Cramer, la méthode de Jacobi et par la méthode da la matrice inverse.'},
    { title: 'Sérialisation d\'objets', short_description: 'Application console permettant de sérialiser et désérialiser des objets via un fichier JSON.', languages: ['Java'], images: ['assets/images/serializeJson_proj.png', 'assets/images/deserializeJson_proj.png'],
    description: 'Cette application console permet de sérialiser et désérialiser des objets à partir d\'un fichier JSON, à condition que l\'objet dispose d\'un constructeur approprié, offrant ainsi une solution simple et flexible pour la gestion des données.'},
    { title: 'Projet révoltionnaire en IA', short_description: 'La municipalité de Nicolet m\'as mandaté de leur fournir un moyen de prédire toutes aspects socio-environnementaux en lien avec leur ville', languages: ['Python'], images: ['assets/images/nicolet_proj.png', 'assets/images/nicolet1_proj.png', 'assets/images/nicolet2_proj.png'],
    description: 'Conçu dans le cadre d\'un stage, ce projet a pour but de prédire les aspects socio-environnementaux de la ville de Nicolet en utilisant des algorithmes d\'apprentissage automatique tel que la régression linéaire et le réseau neuronnale. Les données utilisées proviennent de diverses sources, telles que ' +
      'les données météorologiques, les données de la ville et les données de l\'environnement. Les résultats sont générer sous forme de graphiques, soit un graphique doughnut socio-environnemental, un graphique à barres verticales ou horizontales, un graphique en ligne ou un graphique en secteurs.'},
  ]

  getLanguageColor(name: string): string {
    return this.languages.find(lang => lang.name === name)?.color || 'black';
  }

  imageIndexes = new Map<string, number>();
  expandedProjects = new Map<string, boolean>();

  constructor() {
    this.personal_projects.forEach(project => {
      this.imageIndexes.set(project.title, 0);
      this.expandedProjects.set(project.title, false);
    });
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
