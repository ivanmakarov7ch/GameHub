import '../../css/base.css';
import '../../css/layout.css';
import '../../css/components.css';
import '../../css/responsive.css';
import '../../css/pages/home.css';

import { renderGameCard } from '../components/GameCard.js';
import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { getPopularGames } from '../api/rawg.js';

const app = document.querySelector('#app');

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
          <p>Loading games...</p>
        </div>
      </section>
    </div>
  </main>


  ${renderFooter()}
`;

async function loadFeaturedGames() {
  const featuredGames = document.querySelector('#featured-games');

  try {
    const games = await getPopularGames(8);

    if (games.length === 0) {
      featuredGames.innerHTML = '<p>No games found.</p>';
      return;
    }

    featuredGames.innerHTML = games.map((game) => renderGameCard(game)).join('');
  } catch (error) {
    console.error('Unable to load featured games:', error);

    featuredGames.innerHTML = '<p>We could not load games right now. Please try again later.</p>';
  }
}

loadFeaturedGames();
