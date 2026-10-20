import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  // <app-sidebar> est l'enfant direct de la grille .app :
  // il recoit les classes de placement et l'id cible du bouton menu.
  host: {
    class: 'app__sidebar sidebar',
    id: 'navigation',
  },
})
export class Sidebar {}
