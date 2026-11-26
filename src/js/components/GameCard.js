function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });
}

export function renderGameCard(game) {
  const { id, title, image, rating, released, genres = [] } = game;

  const safeTitle = escapeHTML(title);
  const safeImage =
    typeof image === 'string' && (/^https?:\/\//i.test(image) || image.startsWith('/images/'))
      ? escapeHTML(image)
      : '';

  const genreLabels = genres
    .map((genre) => `<span class="badge">${escapeHTML(genre)}</span>`)
    .join('');

  const imageMarkup = safeImage
    ? `
      <img
        class="game-card-image"
        src="${safeImage}"
        alt="${safeTitle}"
        loading="lazy"
      />
    `
    : `
      <div class="game-card-placeholder" aria-hidden="true">
        <span>GAMEHUB</span>
      </div>
    `;

  return `
    <article class="card game-card">
      <a href="/game.html?id=${encodeURIComponent(id)}">
        ${imageMarkup}

        <div class="card-content">
          <h3 class="card-title">${safeTitle}</h3>

          <div class="game-card-meta">
            <span class="game-rating">
              ★ ${rating ?? 'N/A'}
            </span>

            <span class="game-release">
              ${escapeHTML(released || 'Release date unknown')}
            </span>
          </div>

          <div class="game-card-genres">
            ${genreLabels}
          </div>
        </div>
      </a>
    </article>
  `;
}
