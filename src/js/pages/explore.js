import '../../css/base.css';
import '../../css/layout.css';
import '../../css/components.css';
import '../../css/responsive.css';
import '../../css/pages/explore.css';

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderSearchBar } from '../components/SearchBar.js';

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
