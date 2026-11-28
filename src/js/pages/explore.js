import '../../css/base.css';
import '../../css/layout.css';
import '../../css/components.css';
import '../../css/responsive.css';
import '../../css/pages/explore.css';

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderSearchBar } from '../components/SearchBar.js';
import { renderGameCard } from '../components/GameCard.js';
import { searchGames } from '../api/rawg.js';

const app = document.querySelector('#app');

app.innerHTML = `
  ${renderHeader('explore')}

  <main>
    <div class="container">
      <section class="explore-section">
        <h1 class="section-title">Explore Games</h1>

        <p class="section-description">
          Discover games across different genres and platforms.
        </p>

        ${renderSearchBar({
          placeholder: 'Search for games...',
          inputId: 'explore-search',
        })}

        <div class="game-grid" id="game-results">
          <p>Games will appear here.</p>
        </div>
      </section>
    </div>
  </main>

  ${renderFooter()}
`;

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#explore-search');
const gameResults = document.querySelector('#game-results');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    gameResults.innerHTML = '<p>Please enter a game title.</p>';
    return;
  }

  try {
    gameResults.innerHTML = '<p>Searching games...</p>';

    const games = await searchGames(query);

    if (games.length === 0) {
      gameResults.innerHTML = '<p>No games found. Try another title.</p>';
      return;
    }

    gameResults.innerHTML = games.map((game) => renderGameCard(game)).join('');
  } catch (error) {
    console.error('Unable to search games:', error);

    gameResults.innerHTML = '<p>Something went wrong. Please try again later.</p>';
  }
});
