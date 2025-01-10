import { Component } from '@angular/core';
import { ThemeService } from '../../../app/services/theme.service';

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  theme = this.themeService.getTheme();

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: string): void {
    this.themeService.setTheme(theme);
    this.theme = theme;
  }
}
