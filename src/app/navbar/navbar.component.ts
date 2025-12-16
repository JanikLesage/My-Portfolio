import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true
})
export class NavbarComponent {
  constructor(private translate: TranslateService) {
    const supportedLanguages = ['en', 'fr'];
    const browserLang = this.translate.getBrowserLang();

    const langToUse = browserLang && supportedLanguages.includes(browserLang) ? browserLang : 'en';
    this.translate.use(langToUse);
  }

  switchLang(lang: string){
    this.translate.use(lang);
  }

  openURL(url: string) {
    const lang = this.translate.currentLang;
    const enUrl = `${url}-EN.pdf`;
    const frUrl = `${url}-FR.pdf`;
    
    if (lang === 'en') {
      fetch(enUrl, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            window.open(enUrl, '_blank');
          } else {
            window.open(frUrl, '_blank');
          }
        })
        .catch(() => {
          window.open(`${url}.pdf`, '_blank');
        });

    } else if (lang === 'fr') {
      fetch(frUrl, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            window.open(frUrl, '_blank');
          } else {
            window.open(enUrl, '_blank');
          }
        })
        .catch(() => {
          window.open(`${url}.pdf`, '_blank');
        });
    }
  }
}
