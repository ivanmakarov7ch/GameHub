import '../../css/base.css';
import '../../css/layout.css';
import '../../css/components.css';
import '../../css/responsive.css';
import '../../css/pages/deals.css';

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

const app = document.querySelector('#app');

app.innerHTML = `
  ${renderHeader('deals')}

  <main>
    <div class="container">
      <section class="deals-section">
        <h1 class="section-title">Deals & Giveaways</h1>

        <p class="section-description">
          Find great gaming deals and discover free games.
        </p>

        <div class="game-grid" id="deals-results">
          <p>Deals and giveaways will appear here.</p>
        </div>
      </section>
    </div>
  </main>

  ${renderFooter()}
`;
