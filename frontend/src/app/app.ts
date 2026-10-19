import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('techcorp-rh');
  // Valeurs affichees dans le gabarit avec {{ }}. Elles seront remplacees
  // par les donnees de l'utilisateur connecte lors des seances suivantes.
  protected readonly appName = 'TechCorp RH';
  protected readonly userName = signal('Claire Martin');

  // Etat d'ouverture de la navigation sur mobile.
  protected readonly navOpen = signal(false);

  protected toggleNav(): void {
    this.navOpen.update((open) => !open);
  }
}
