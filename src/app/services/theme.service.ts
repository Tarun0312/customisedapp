import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = 'default'; // Default theme

  setTheme(theme: string): void {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  getTheme(): string {
    return this.theme;
  }

}
