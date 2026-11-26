import '../../css/base.css';
import '../../css/layout.css';
import '../../css/components.css';
import '../../css/responsive.css';
import '../../css/pages/game.css';

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

const app = document.querySelector('#app');

app.innerHTML = `
  ${renderHeader('explore')}

  <main>
    <div class="container">
      <section class="game-details">
        <p>Game details will appear here.</p>
      </section>
    </div>
  </main>

  ${renderFooter()}
`;
