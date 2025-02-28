import { Routes } from '@angular/router';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home-screen', pathMatch: 'full' },
  { path: 'home-screen', component: HomeScreenComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'personal-projects', component: PersonalProjectsComponent },
  { path: '**', component: PageNotFoundComponent }
];
