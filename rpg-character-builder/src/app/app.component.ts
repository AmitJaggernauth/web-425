import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/players">Players</a>
      <a routerLink="/signin">Sign In</a>
      <a routerLink="/create-character">Create Character</a>
      <a routerLink="/create-guild">Create Guild</a>
      <a routerLink="/character-faction">Character Faction</a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <a routerLink="/home">Home</a>
      <a routerLink="/players">Players</a>
      <a routerLink="/signin">Sign In</a>
      <a routerLink="/create-character">Create Character</a>
      <a routerLink="/create-guild">Create Guild</a>
      <a routerLink="/character-faction">Character Faction</a>
    </footer>
  `,
  styles: [`
    nav, footer {
      display: flex;
      gap: 1rem;
      background: #222;
      padding: 1rem;
    }
    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
    main {
      padding: 2rem;
    }
  `]
})
export class AppComponent {}
