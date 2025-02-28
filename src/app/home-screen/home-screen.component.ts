import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home-screen',
  imports: [TranslatePipe, MatCardModule, MatIconModule],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {
  constructor(private translate: TranslateService) {}
}
