(() => {
<<<<<<< Updated upstream
  const STORAGE_KEY = 'ftgames:favorites';

=======
  const STORAGE_KEY = 'ftgames-favorites';
>>>>>>> Stashed changes
  const defaultGames = [
    { slug: '/platformer_game', title: 'Platformer Game', description: 'A fun platformer game, avoid lava while going into the blue portals, will you reach the end?', thumbnail: 'thumbnails/platformer-game-thumbnail.png' },
    { slug: '/f111_game', title: 'F111 Game', description: 'Survive the MIG23 encounter for as long as you can without being shot by the deadly MIG. 💀', thumbnail: 'thumbnails/f111-game-thumbnail.png' },
    { slug: '/scratch_playground', title: 'Scratch Playground', description: 'Roam around and enjoy this fun Scratch sandbox game, build anything you can imagine and have fun!', thumbnail: 'thumbnails/scratch-playground-thumbnail.png' },
    { slug: '/modern_dogfights', title: 'Modern Dogfights', description: 'Fight with a friend, one is in a SU27, the other is in an F15. Fight to the death in this fun modern dogfights simulator!', thumbnail: 'thumbnails/modern-dogfights-thumbnail.png' },
    { slug: '/chess', title: 'Chess', description: 'Play a fun game of chess with your friends, will you be the one to claim checkmate?', thumbnail: 'thumbnails/chess-thumbnail.png' },
    { slug: '/idle_gacha_roller', title: 'Idle Gacha Roller', description: 'Push your luck and earn your digital fortune with this fun Gacha Roller game.', thumbnail: 'thumbnails/igr-thumbnail.png' },
    { slug: '/snake_io', title: 'Snake.ft', description: 'Like Snake.io, but better. Slither around and earn points to get your highest score!', thumbnail: 'thumbnails/snake-io-thumbnail.png' },
    { slug: '/minesweeper', title: 'Minesweeper', description: 'The classic game of Minesweeper.', thumbnail: 'thumbnails/minesweeper-thumbnail.png' },
    { slug: '/flappy_duck', title: 'Flappy Duck', description: 'Flap your way through this tricky obstacle course with this classic infinite runner game.', thumbnail: 'thumbnails/flappy-duck-thumbnail.png' },
    { slug: 'https://arcade.makecode.com/S73309-71101-76715-73171', title: 'Vent Crawlers Beta', description: 'Beta game, subject to change.', thumbnail: 'thumbnails/vent-crawlers-thumbnail.png' },
    { slug: '/polytrack', title: 'Polytrack', description: 'Race your way through a wide variety of tracks in this fun racing simulator.', thumbnail: 'thumbnails/polytrack-thumbnail.png' },
    { slug: '/minecraft_classic', title: 'Minecraft Classic', description: 'The only limit is your imagination in this classic of a classic sandbox game.', thumbnail: 'thumbnails/minecraft-classic-thumbnail.png' },
    { slug: 'https://arcade.makecode.com/S05292-48817-56543-81346', title: 'Arrow Battles', description: 'Beta game, subject to change.', thumbnail: 'thumbnails/arrow-battles-thumbnail.png' },
    { slug: '/block_blast', title: 'Block Blast!', description: 'Blast colored bricks to get your high score in this fun strategy game.', thumbnail: 'thumbnails/block-blast-thumbnail.png' },
    { slug: '/tetris', title: 'Tetris', description: 'Tetris is a classic puzzle game where you manipulate falling, four-block shapes.', thumbnail: 'thumbnails/tetris-thumbnail.png' },
    { slug: '/flappy_dunk', title: '🏀Flappy Dunk', description: 'Tap to keep the basketball in the air and guide it through hoops to score points.', thumbnail: 'thumbnails/flappy-dunk-thumbnail.png' },
    { slug: '/money_mines', title: 'Money Mines', description: 'Thanks to alphawolf6612 for the original project Money Mines but its mine sweeper.', thumbnail: 'thumbnails/money-mines-thumbnail.png' },
    { slug: '/crossy_road', title: 'Crossy Road', description: 'Help your character cross the busy road and avoid obstacles in this classic arcade game.', thumbnail: 'thumbnails/crossy-road-thumbnail.png' },
    { slug: '/space_invaders', title: '👾 SPACE INVADERS 👾', description: '🚀 DEFEND EARTH, blast the invading alien fleet before they destroy you.', thumbnail: 'thumbnails/space-invaders-thumbnail.png' },
    { slug: '/retro_pong', title: 'Retro Pong', description: 'The original Pong video game from the early 1970s, truly a retro classic!', thumbnail: 'thumbnails/retro-pong-thumbnail.png' },
    { slug: '/pacific_dogfights', title: '✈️Pacific Dogfights✈️', description: 'This is a remixed scratch project by Jcubas02 which Blabby_axolotl2 tweaked.', thumbnail: 'thumbnails/pacific-dogfights-thumbnail.png' },
    { slug: '/pac_man_platformer', title: 'Pac-Man Platformer', description: 'Credits to atomicmagicnumber for the original project on scratch.', thumbnail: 'thumbnails/pac-man-platformer-thumbnail.png' },
<<<<<<< Updated upstream
    { slug: '/2d_platformer/instructions', title: '2D Platformer', description: 'Parkour your way to the finish in this fun 2D platformer.', thumbnail: 'thumbnails/2d-platformer-thumbnail.png' },
    { slug: '/wow', title: 'World of Warships Legends', description: 'Command your fleet and engage in epic naval battles in this game.', thumbnail: 'thumbnails/wow-thumbnail.png' },
    { slug: '/suggestion_box', title: 'Suggestion Box', description: 'This is where you can suggest games for us to add to our website.', thumbnail: 'thumbnails/suggestion-box-thumbnail.png' }
  ];

  function normalizeSlug(href) {
    if (!href) return '';

    const trimmed = href.trim();
    if (!trimmed) return '';

    if (/^(https?:|mailto:|tel:)/i.test(trimmed)) return trimmed;
    if (trimmed.startsWith('#')) return trimmed;

    let cleaned = trimmed.replace(/\\/g, '/');
    cleaned = cleaned.replace(/^\/([A-Za-z]:)/, '$1');
    if (!cleaned.startsWith('/')) cleaned = `/${cleaned}`;
    return cleaned.replace(/\/+/g, '/');
=======
    { slug: '/suggestion_box', title: 'Suggestion Box', description: 'This is where you can suggest games for us to add to our website.', thumbnail: 'thumbnails/suggestion-box-thumbnail.png' }
  ];

  function normalizeFavorites(favorites) {
    const normalized = Array.isArray(favorites)
      ? favorites
          .map((favorite) => normalizeSlug(favorite))
          .filter(Boolean)
      : [];

    return Array.from(new Set(normalized));
>>>>>>> Stashed changes
  }

  function getFavorites() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
<<<<<<< Updated upstream
      const normalized = Array.isArray(parsed)
        ? Array.from(new Set(parsed.map(normalizeSlug).filter(Boolean)))
        : [];

      if (JSON.stringify(normalized) !== JSON.stringify(parsed)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
=======
      const normalized = normalizeFavorites(parsed);

      if (JSON.stringify(normalized) !== JSON.stringify(parsed)) {
        saveFavorites(normalized);
>>>>>>> Stashed changes
      }

      return normalized;
    } catch (error) {
      return [];
    }
  }

  function saveFavorites(favorites) {
<<<<<<< Updated upstream
    const normalized = Array.from(new Set(favorites.map(normalizeSlug).filter(Boolean)));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
=======
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeFavorites(favorites)));
  }

  function normalizeSlug(href) {
    if (!href) return '';

    const trimmed = href.trim();

    if (!trimmed) return '';
    if (/^(https?:|mailto:|tel:)/i.test(trimmed)) return trimmed;
    if (trimmed.startsWith('#')) return trimmed;

    const withoutDrive = trimmed.replace(/^\/([A-Za-z]:)/, '').replace(/^[A-Za-z]:\//, '/');
    const cleaned = withoutDrive.startsWith('/') ? withoutDrive : `/${withoutDrive}`;

    return cleaned.replace(/\/+/g, '/');
>>>>>>> Stashed changes
  }

  function getGameData() {
    const cards = Array.from(document.querySelectorAll('.game-card'));
<<<<<<< Updated upstream
    const gamesMap = new Map();

    cards.forEach((card) => {
      const slug = normalizeSlug(card.getAttribute('href') || card.dataset.slug || '');
      if (!slug) return;

      const title = card.querySelector('.game-card-title')?.textContent.trim() || card.dataset.title || slug.replace(/(^\/|\/)/g, ' ').replace(/[_-]/g, ' ');
      const description = card.querySelector('.game-card-description')?.textContent.trim() || card.dataset.description || '';
      const thumbnail = card.querySelector('img')?.getAttribute('src') || card.dataset.thumbnail || '';

      if (!gamesMap.has(slug)) {
        gamesMap.set(slug, { slug, title, description, thumbnail });
      }
    });

    defaultGames.forEach((game) => {
      if (game.slug && !gamesMap.has(game.slug)) {
        gamesMap.set(game.slug, game);
      }
    });

    return Array.from(gamesMap.values());
=======

    if (cards.length) {
      return cards
        .map((card) => {
          const link = card.getAttribute('href') ? card : card.querySelector('a');
          const slug = normalizeSlug(link?.getAttribute('href') || card.dataset.slug || '');
          const title = card.querySelector('.game-card-title')?.textContent.trim() || card.dataset.title || '';
          const description = card.querySelector('.game-card-description')?.textContent.trim() || card.dataset.description || '';
          const thumbnail = card.querySelector('.game-card-thumbnail')?.getAttribute('src') || card.dataset.thumbnail || '';

          return { slug, title, description, thumbnail };
        })
        .filter((game) => game.slug);
    }

    return defaultGames;
>>>>>>> Stashed changes
  }

  function renderFavoriteButtons(favorites) {
    const cards = Array.from(document.querySelectorAll('.game-card'));

    cards.forEach((card) => {
      const slug = normalizeSlug(card.getAttribute('href') || card.dataset.slug || '');
<<<<<<< Updated upstream
      if (!slug) return;

      let button = card.querySelector('.fav-star');
      if (!button) {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'fav-star';
        button.setAttribute('aria-label', 'Favorite game');
        card.style.position = card.style.position || 'relative';
        button.style.position = 'relative';
        button.style.zIndex = '3';
        button.style.pointerEvents = 'auto';
        card.appendChild(button);
      }

      if (!button.dataset.bound) {
        button.dataset.bound = 'true';
        button.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();

          const id = button.dataset.gameId;
          if (!id) return;

          const currentFavorites = getFavorites();
          const nextFavorites = currentFavorites.includes(id)
            ? currentFavorites.filter((entry) => entry !== id)
            : [...currentFavorites, id];

          saveFavorites(nextFavorites);
          renderAll();
        });
      }

      const isFavorite = favorites.includes(slug);
      button.dataset.gameId = slug;
      button.textContent = isFavorite ? '★' : '☆';
      button.title = isFavorite ? 'Remove from favorites' : 'Add to favorites';
      button.classList.toggle('active', isFavorite);
      button.setAttribute('aria-pressed', isFavorite ? 'true' : 'false');
    });
  }

  function createFavoritesSection() {
    let section = document.getElementById('favorites-section');
    if (section) return section;

    const featured = document.querySelector('.featured');
    if (!featured) return null;

    section = document.createElement('section');
    section.id = 'favorites-section';
    section.className = 'favorites-section';
    section.setAttribute('aria-labelledby', 'favorites-heading');
    section.innerHTML = '<h2 id="favorites-heading">⭐ Favorite Games</h2><div id="favorites-list" class="favorites-list"></div>';
    featured.parentNode.insertBefore(section, featured.nextSibling);
    return section;
  }

  function renderFavoritesSection(favorites) {
    let section = document.getElementById('favorites-section');
    if (!section) {
      section = createFavoritesSection();
    }
    if (!section) return;

    const list = section.querySelector('.favorites-list');
    if (!list) return;

    const games = getGameData().filter((game) => favorites.includes(game.slug));
=======
      let button = card.querySelector('.favorite-toggle');

      if (!button) {
        button = document.createElement('button');
        button.className = 'favorite-toggle';
        button.type = 'button';
        button.setAttribute('aria-label', 'Favorite game');
        card.appendChild(button);
      }

      const isFavorite = favorites.includes(slug);
      button.classList.toggle('is-favorite', isFavorite);
      button.setAttribute('aria-pressed', isFavorite ? 'true' : 'false');
      button.textContent = isFavorite ? '★' : '☆';
      button.title = isFavorite ? 'Remove from favorites' : 'Add to favorites';
    });
  }

  function renderFavoritesSection(favorites) {
    const section = document.getElementById('favorites-section');
    const list = document.getElementById('favorites-list');

    if (!section || !list) return;

    const games = getGameData().filter((game) => favorites.includes(game.slug));

>>>>>>> Stashed changes
    if (!games.length) {
      list.innerHTML = '<p class="favorites-empty">No favorite games yet. Tap the star on any game card to save it here.</p>';
      return;
    }

    list.innerHTML = '';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    games.forEach((game) => {
      const card = document.createElement('article');
      card.className = 'favorite-card';
      card.innerHTML = `
        <a class="favorite-card-link" href="${game.slug}">
<<<<<<< Updated upstream
          ${game.thumbnail ? `<img class="favorite-card-thumb" src="${game.thumbnail}" alt="${game.title}">` : ''}
=======
          <img class="favorite-card-thumb" src="${game.thumbnail}" alt="${game.title}">
>>>>>>> Stashed changes
          <div class="favorite-card-content">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
          </div>
        </a>
      `;
      list.appendChild(card);
    });
  }

  function renderAll() {
    const favorites = getFavorites();
    renderFavoriteButtons(favorites);
    renderFavoritesSection(favorites);
  }

  function bindEvents() {
    document.addEventListener('click', (event) => {
<<<<<<< Updated upstream
      const button = event.target.closest('.fav-star');
=======
      const button = event.target.closest('.favorite-toggle');

>>>>>>> Stashed changes
      if (!button) return;

      event.preventDefault();
      event.stopPropagation();

<<<<<<< Updated upstream
      const id = button.dataset.gameId;
      if (!id) return;

      const favorites = getFavorites();
      const nextFavorites = favorites.includes(id)
        ? favorites.filter((entry) => entry !== id)
        : [...favorites, id];
=======
      const card = button.closest('.game-card');
      const slug = normalizeSlug(card?.getAttribute('href') || card?.dataset.slug || '');
      const favorites = getFavorites();
      const nextFavorites = favorites.includes(slug)
        ? favorites.filter((entry) => entry !== slug)
        : [...favorites, slug];
>>>>>>> Stashed changes

      saveFavorites(nextFavorites);
      renderAll();
    });
<<<<<<< Updated upstream

    document.addEventListener('mousedown', (event) => {
      const button = event.target.closest('.fav-star');
      if (!button) return;
      event.preventDefault();
    });
  }

  function init() {
    bindEvents();
    renderAll();

    const observer = new MutationObserver(() => {
      renderAll();
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
=======
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      bindEvents();
      renderAll();
    });
  } else {
    bindEvents();
    renderAll();
>>>>>>> Stashed changes
  }
})();
