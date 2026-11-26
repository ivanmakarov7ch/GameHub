import '../../css/base.css';
import '../../css/layout.css';
import '../../css/components.css';
import '../../css/responsive.css';
import '../../css/pages/home.css';
import { renderGameCard } from '../components/GameCard.js';

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

const app = document.querySelector('#app');
const sampleGames = [
  {
    id: 1,
    title: 'Elden Ring',
    rating: null,
    released: null,
    genres: ['RPG', 'Action'],
  },
  {
    id: 2,
    title: 'Hollow Knight',
    rating: null,
    released: null,
    genres: ['Metroidvania', 'Adventure'],
  },
  {
    id: 3,
    title: 'Stardew Valley',
    rating: null,
    released: null,
    genres: ['Simulation', 'RPG'],
  },
  {
    id: 4,
    title: 'Hades',
    rating: null,
    released: null,
    genres: ['Roguelike', 'Action'],
  },
];

app.innerHTML = `
  ${renderHeader('home')}

  <main>
    <div class="container">
      <section class="home-hero">
        <h1>Discover Your Next Favorite Game</h1>

        <p>
          Explore games, find amazing deals, and organize
          your personal gaming library.
        </p>

        <a href="/explore.html" class="btn btn-primary">
          Explore Games
        </a>
      </section>

      <section class="featured-section">
        <h2 class="section-title">Featured Games</h2>

        <p class="section-description">
          Discover something new to play.
        </p>

        <div class="game-grid" id="featured-games">
          ${sampleGames.map((game) => renderGameCard(game)).join('')}
        </div>
      </section>
    </div>
  </main>

  ${renderFooter()}
`;
