import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { of, throwError } from 'rxjs';
import en from '../assets/i18n/en.json';
import fr from '../assets/i18n/fr.json';

// Keep translations in the hashed app bundle so deployments invalidate cached text.
export class BundledTranslateLoader implements TranslateLoader {
  getTranslation(lang: string) {
    switch (lang) {
      case 'en': return of(en);
      case 'fr': return of(fr);
      default: return throwError(() => new Error(`Unsupported language: ${lang}`));
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: BundledTranslateLoader
      }
    }).providers!
    ]
}
