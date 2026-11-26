export function renderSearchBar({ placeholder = 'Search games...', inputId = 'game-search' } = {}) {
  return `
    <form class="search-form" role="search">
      <label class="visually-hidden" for="${inputId}">
        Search games
      </label>

      <input
        type="search"
        id="${inputId}"
        class="form-input search-input"
        name="search"
        placeholder="${placeholder}"
        autocomplete="off"
      />

      <button type="submit" class="btn btn-primary">
        Search
      </button>
    </form>
  `;
}
