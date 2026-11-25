const navigationLinks = [
  { label: 'Home', href: '/', page: 'home' },
  { label: 'Explore', href: '/explore.html', page: 'explore' },
  { label: 'Deals', href: '/deals.html', page: 'deals' },
  { label: 'My Library', href: '/library.html', page: 'library' },
];

export function renderHeader(activePage = 'home') {
  const navigation = navigationLinks
    .map((link) => {
      const isActive = link.page === activePage;

      return `
        <a
          href="${link.href}"
          class="nav-link${isActive ? ' active' : ''}"
          ${isActive ? 'aria-current="page"' : ''}
        >
          ${link.label}
        </a>
      `;
    })
    .join('');

  return `
    <header class="site-header">
      <div class="container header-container">
        <a href="/" class="site-logo" aria-label="GameHub Home">
          Game<span>Hub</span>
        </a>

        <nav class="main-navigation" aria-label="Main navigation">
          ${navigation}
        </nav>
      </div>
    </header>
  `;
}
