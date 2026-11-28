import '../../css/base.css';
import '../../css/layout.css';
import '../../css/components.css';
import '../../css/responsive.css';
import '../../css/pages/game.css';

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { getGameDetails } from '../api/rawg.js';

const app = document.querySelector('#app');

const params = new URLSearchParams(window.location.search);
const gameId = params.get('id');

app.innerHTML = `
  ${renderHeader('explore')}

  <main>
    <div class="container">
      <section class="game-details" id="game-details">
        <p>Loading game details...</p>
      </section>
    </div>
  </main>

  ${renderFooter()}
`;

async function loadGameDetails() {
  const gameDetails = document.querySelector('#game-details');

  if (!gameId) {
    gameDetails.innerHTML = '<p>No game was selected.</p>';
    return;
  }

  try {
    gameDetails.innerHTML = '<p>Loading game details...</p>';

    const game = await getGameDetails(gameId);

    gameDetails.innerHTML = `
      <div class="game-details-content">
        <h1>${game.name}</h1>

        <img
          src="${game.background_image || ''}"
          alt="${game.name}"
          class="game-details-image"
        />

        <p>Rating: ${game.rating || 'N/A'}</p>
        <p>Released: ${game.released || 'Unknown'}</p>
        <p>Genres: ${(game.genres ?? []).map((genre) => genre.name).join(', ') || 'Unknown'}</p>

        <div class="game-description">
          ${game.description || 'No description available.'}
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Unable to load game details:', error);

    gameDetails.innerHTML = '<p>Unable to load game details. Please try again later.</p>';
  }
}

loadGameDetails();
