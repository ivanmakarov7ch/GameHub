import '../../css/base.css';
import '../../css/layout.css';
import '../../css/components.css';
import '../../css/responsive.css';
import '../../css/pages/library.css';

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

const app = document.querySelector('#app');

app.innerHTML = `
  ${renderHeader('library')}

  <main>
    <div class="container">
      <section class="library-section">
        <h1 class="section-title">My Library</h1>

        <p class="section-description">
          Organize and manage your personal game collection.
        </p>

        <div class="game-grid" id="library-games">
          <p>Your saved games will appear here.</p>
        </div>
      </section>
    </div>
  </main>

  ${renderFooter()}
`;
