const games = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    genre: 'Action RPG',
    rating: 4.8,
    releaseYear: 2020,
    platform: 'PC',
    oldPrice: 59.99,
    discount: 35,
    newPrice: 38.99,
    description: 'A neon-soaked cyberpunk adventure full of style, danger, and choice.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    category: 'Featured'
  },
  {
    id: 2,
    title: 'Elden Ring',
    genre: 'Open World RPG',
    rating: 4.9,
    releaseYear: 2022,
    platform: 'PC',
    oldPrice: 59.99,
    discount: 25,
    newPrice: 44.99,
    description: 'An epic fantasy journey with brutal combat and breathtaking landscapes.',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80',
    category: 'RPG'
  },
  {
    id: 3,
    title: 'Red Dead Redemption 2',
    genre: 'Western Action',
    rating: 4.9,
    releaseYear: 2018,
    platform: 'PC',
    oldPrice: 49.99,
    discount: 20,
    newPrice: 39.99,
    description: 'A cinematic western masterpiece with rich story and immersive worldbuilding.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure'
  },
  {
    id: 4,
    title: 'GTA V',
    genre: 'Open World',
    rating: 4.7,
    releaseYear: 2013,
    platform: 'PC',
    oldPrice: 29.99,
    discount: 40,
    newPrice: 17.99,
    description: 'A legendary sandbox adventure packed with chaos, missions, and freedom.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80',
    category: 'Action'
  },
  {
    id: 5,
    title: 'Hollow Knight',
    genre: 'Metroidvania',
    rating: 4.8,
    releaseYear: 2017,
    platform: 'PC',
    oldPrice: 14.99,
    discount: 15,
    newPrice: 12.74,
    description: 'Elegant platforming, haunting beauty, and tightly designed exploration.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc2?auto=format&fit=crop&w=900&q=80',
    category: 'Indie'
  },
  {
    id: 6,
    title: 'Black Myth: Wukong',
    genre: 'Action RPG',
    rating: 4.9,
    releaseYear: 2024,
    platform: 'PC',
    oldPrice: 59.99,
    discount: 10,
    newPrice: 53.99,
    description: 'A mythic action RPG with striking combat and rich Chinese folklore.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    category: 'Featured'
  },
  {
    id: 7,
    title: 'God of War',
    genre: 'Action Adventure',
    rating: 4.8,
    releaseYear: 2022,
    platform: 'PC',
    oldPrice: 49.99,
    discount: 30,
    newPrice: 34.99,
    description: 'A brutal father-son saga with incredible scale and emotional depth.',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure'
  },
  {
    id: 8,
    title: 'Spider-Man Remastered',
    genre: 'Superhero Action',
    rating: 4.8,
    releaseYear: 2022,
    platform: 'PC',
    oldPrice: 49.99,
    discount: 25,
    newPrice: 37.49,
    description: 'Swing through New York with fluid combat and premium web-slinging.',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80',
    category: 'Action'
  },
  {
    id: 9,
    title: 'Ghost of Tsushima',
    genre: 'Adventure',
    rating: 4.7,
    releaseYear: 2020,
    platform: 'PC',
    oldPrice: 59.99,
    discount: 20,
    newPrice: 47.99,
    description: 'A cinematic samurai epic with breathtaking landscapes and dynamic combat.',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure'
  },
  {
    id: 10,
    title: 'Resident Evil 4',
    genre: 'Survival Horror',
    rating: 4.8,
    releaseYear: 2023,
    platform: 'PC',
    oldPrice: 59.99,
    discount: 18,
    newPrice: 49.19,
    description: 'Tense survival horror with relentless pacing and unforgettable set pieces.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    category: 'Horror'
  },
  {
    id: 11,
    title: 'Baldur\'s Gate 3',
    genre: 'CRPG',
    rating: 4.9,
    releaseYear: 2023,
    platform: 'PC',
    oldPrice: 59.99,
    discount: 15,
    newPrice: 50.99,
    description: 'A storytelling powerhouse with deep choices and rich party dynamics.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    category: 'RPG'
  },
  {
    id: 12,
    title: 'DOOM Eternal',
    genre: 'Shooter',
    rating: 4.7,
    releaseYear: 2020,
    platform: 'PC',
    oldPrice: 39.99,
    discount: 30,
    newPrice: 27.99,
    description: 'Fast-paced demon slaying with high-energy combat and iconic music.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    category: 'Action'
  },
  {
    id: 13,
    title: 'Assassin\'s Creed Shadows',
    genre: 'Action Adventure',
    rating: 4.6,
    releaseYear: 2025,
    platform: 'PC',
    oldPrice: 69.99,
    discount: 12,
    newPrice: 61.59,
    description: 'A stylish stealth adventure set in a rich historical world.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure'
  },
  {
    id: 14,
    title: 'The Witcher 3',
    genre: 'Open World RPG',
    rating: 4.9,
    releaseYear: 2015,
    platform: 'PC',
    oldPrice: 39.99,
    discount: 50,
    newPrice: 19.99,
    description: 'A sprawling fantasy RPG known for its characters, quests, and world.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    category: 'RPG'
  },
  {
    id: 15,
    title: 'Lies of P',
    genre: 'Soulslike',
    rating: 4.5,
    releaseYear: 2023,
    platform: 'PC',
    oldPrice: 49.99,
    discount: 20,
    newPrice: 39.99,
    description: 'A dark, elegant soulslike adventure with intricate combat and style.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc2?auto=format&fit=crop&w=900&q=80',
    category: 'Action'
  },
  {
    id: 16,
    title: 'Sekiro',
    genre: 'Action Adventure',
    rating: 4.8,
    releaseYear: 2019,
    platform: 'PC',
    oldPrice: 59.99,
    discount: 35,
    newPrice: 38.99,
    description: 'A mastery-driven action game with intense swordplay and verticality.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80',
    category: 'Action'
  },
  {
    id: 17,
    title: 'Hades II',
    genre: 'Rogue-like',
    rating: 4.6,
    releaseYear: 2025,
    platform: 'PC',
    oldPrice: 34.99,
    discount: 10,
    newPrice: 31.49,
    description: 'Fast, colorful, and endlessly rewarding action with a mythic twist.',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80',
    category: 'Indie'
  },
  {
    id: 18,
    title: 'Hogwarts Legacy',
    genre: 'Fantasy Adventure',
    rating: 4.6,
    releaseYear: 2023,
    platform: 'PC',
    oldPrice: 69.99,
    discount: 20,
    newPrice: 55.99,
    description: 'Step into a magical world where spellcasting and exploration shine.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure'
  },
  {
    id: 19,
    title: 'Helldivers 2',
    genre: 'Co-op Shooter',
    rating: 4.7,
    releaseYear: 2024,
    platform: 'PC',
    oldPrice: 39.99,
    discount: 15,
    newPrice: 33.99,
    description: 'A chaotic co-op shooter with satirical energy and explosive teamwork.',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80',
    category: 'Action'
  },
  {
    id: 20,
    title: 'Clair Obscur: Expedition 33',
    genre: 'Turn-Based RPG',
    rating: 4.8,
    releaseYear: 2025,
    platform: 'PC',
    oldPrice: 49.99,
    discount: 12,
    newPrice: 43.99,
    description: 'A beautifully crafted turn-based adventure with striking art and emotion.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80',
    category: 'RPG'
  }
];

const heroSlides = [
  {
    title: 'Discover the most premium titles',
    subtitle: 'Make room for epic adventures, cinematic worlds, and instant release day access.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    tag: 'Featured Drop'
  },
  {
    title: 'Buy your favorites at unbeatable prices',
    subtitle: 'Dive into daily deals, special bundles, and limited-time discounts on top releases.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    tag: 'Limited Deals'
  },
  {
    title: 'The future of gaming starts here',
    subtitle: 'A polished digital storefront curated for modern players and top-tier experiences.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tag: 'Next-Gen Store'
  }
];

const state = {
  search: '',
  category: 'All',
  wishlist: JSON.parse(localStorage.getItem('nova_wishlist') || '[]'),
  cart: JSON.parse(localStorage.getItem('nova_cart') || '[]'),
  theme: localStorage.getItem('nova_theme') || 'dark',
  heroIndex: 0
};

const categories = ['All', 'Featured', 'Action', 'RPG', 'Adventure', 'Indie', 'Horror'];

function init() {
  setTheme();
  renderFilters();
  renderGames();
  renderHero();
  renderCart();
  syncCartBadge();
  startHeroSlider();
  bindEvents();
  setupReveal();
  setupCounters();
  hideLoader();
}

function bindEvents() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderGames();
  });

  document.getElementById('gamesGrid').addEventListener('click', handleGameAction);
  document.getElementById('filterRow').addEventListener('click', handleFilterClick);
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('navToggle').addEventListener('click', toggleNav);
  document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.getElementById('cartButton').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('clearCartBtn').addEventListener('click', clearCart);
  document.getElementById('cartPanel').addEventListener('click', handleCartAction);
  document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => document.getElementById('siteNav').classList.remove('open')));

  window.addEventListener('scroll', () => {
    const button = document.getElementById('backToTop');
    button.classList.toggle('show', window.scrollY > 500);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeCart();
  });
}

function renderFilters() {
  const filterRow = document.getElementById('filterRow');
  filterRow.innerHTML = categories.map((category) => `
    <button class='filter-chip ${category === state.category ? 'active' : ''}' data-category='${category}'>${category}</button>
  `).join('');
}

function renderGames() {
  const gamesGrid = document.getElementById('gamesGrid');
  const filteredGames = games.filter((game) => {
    const matchesCategory = state.category === 'All' || game.category === state.category;
    const matchesSearch = !state.search || game.title.toLowerCase().includes(state.search) || game.genre.toLowerCase().includes(state.search);
    return matchesCategory && matchesSearch;
  });

  if (!filteredGames.length) {
    gamesGrid.innerHTML = '<div class="empty-state">No games match your search. Try another filter.</div>';
    return;
  }

  gamesGrid.innerHTML = filteredGames.map((game) => {
    const isWishlisted = state.wishlist.includes(game.id);
    return `
      <article class='game-card reveal'>
        <div class='game-card__media'>
          <img src='${game.image}' alt='${game.title}' loading='lazy' />
          <span class='discount-badge'>-${game.discount}%</span>
          <button class='wishlist-btn ${isWishlisted ? 'active' : ''}' data-action='wishlist' data-id='${game.id}' aria-label='Wishlist ${game.title}'>
            <i class='fa-solid fa-heart'></i>
          </button>
        </div>
        <div class='game-card__body'>
          <div class='game-card__row'>
            <div>
              <h3 class='game-card__title'>${game.title}</h3>
              <p class='game-card__genre'>${game.genre}</p>
            </div>
          </div>
          <div class='game-card__meta'>
            <span class='rating'>★ ${game.rating.toFixed(1)}</span>
            <span>${game.releaseYear}</span>
            <span>${game.platform}</span>
          </div>
          <p class='game-card__desc'>${game.description}</p>
          <div class='price-row'>
            <div class='price-box'>
              <span class='old-price'>$${game.oldPrice.toFixed(2)}</span>
              <span class='new-price'>$${game.newPrice.toFixed(2)}</span>
            </div>
            <button class='buy-btn' data-action='buy' data-id='${game.id}'>Buy Now</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  setupReveal();
}

function handleGameAction(event) {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  const id = Number(button.dataset.id);
  const game = games.find((item) => item.id === id);

  if (!game) return;

  if (action === 'wishlist') toggleWishlist(id, button);
  if (action === 'buy') addToCart(game, button);
}

function toggleWishlist(id, button) {
  if (state.wishlist.includes(id)) {
    state.wishlist = state.wishlist.filter((item) => item !== id);
    showToast('Removed from wishlist');
  } else {
    state.wishlist.push(id);
    showToast('Added to wishlist');
  }
  localStorage.setItem('nova_wishlist', JSON.stringify(state.wishlist));
  renderGames();
  if (button) button.classList.add('active');
}

function addToCart(game, button) {
  const existingItem = state.cart.find((item) => item.id === game.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      id: game.id,
      title: game.title,
      price: game.newPrice,
      quantity: 1
    });
  }

  localStorage.setItem('nova_cart', JSON.stringify(state.cart));
  syncCartBadge();
  renderCart();
  showToast(`${game.title} added to cart`);
  button.classList.add('bump');
  setTimeout(() => button.classList.remove('bump'), 350);
}

function syncCartBadge() {
  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').textContent = cartCount;
  localStorage.setItem('nova_cart_count', String(cartCount));
}

function openCart() {
  document.getElementById('cartPanel').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartPanel').setAttribute('aria-hidden', 'false');
  document.body.classList.add('cart-open');
}

function closeCart() {
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartPanel').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('cart-open');
}

function renderCart() {
  const itemsContainer = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('cartSubtotal');

  if (!state.cart.length) {
    itemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty. Add a few games to see them here.</div>';
    subtotalEl.textContent = '$0.00';
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  itemsContainer.innerHTML = state.cart.map((item) => `
    <div class='cart-item'>
      <div class='cart-item__info'>
        <h4>${item.title}</h4>
        <p>$${item.price.toFixed(2)} each</p>
      </div>
      <div class='cart-item__controls'>
        <button data-action='decrease' data-id='${item.id}'>−</button>
        <span>${item.quantity}</span>
        <button data-action='increase' data-id='${item.id}'>+</button>
        <button class='remove-btn' data-action='remove' data-id='${item.id}'>Remove</button>
      </div>
    </div>
  `).join('');
}

function handleCartAction(event) {
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  const action = button.dataset.action;
  const id = Number(button.dataset.id);

  if (action === 'increase') {
    const item = state.cart.find((entry) => entry.id === id);
    if (item) item.quantity += 1;
  }

  if (action === 'decrease') {
    const item = state.cart.find((entry) => entry.id === id);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        state.cart = state.cart.filter((entry) => entry.id !== id);
      }
    }
  }

  if (action === 'remove') {
    state.cart = state.cart.filter((entry) => entry.id !== id);
  }

  localStorage.setItem('nova_cart', JSON.stringify(state.cart));
  syncCartBadge();
  renderCart();
}

function clearCart() {
  state.cart = [];
  localStorage.setItem('nova_cart', JSON.stringify(state.cart));
  syncCartBadge();
  renderCart();
  showToast('Cart cleared');
}

function handleFilterClick(event) {
  const button = event.target.closest('.filter-chip');
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  renderGames();
}

function renderHero() {
  const hero = heroSlides[state.heroIndex];
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroImage = document.getElementById('heroImage');
  const heroTag = document.getElementById('heroTag');
  const heroPanelTitle = document.getElementById('heroPanelTitle');
  const heroPanelText = document.getElementById('heroPanelText');
  const dots = document.getElementById('heroDots');

  heroTitle.textContent = hero.title;
  heroSubtitle.textContent = hero.subtitle;
  heroImage.src = hero.image;
  heroTag.textContent = hero.tag;
  heroPanelTitle.textContent = hero.tag;
  heroPanelText.textContent = hero.subtitle;

  dots.innerHTML = heroSlides.map((_, index) => `<button class='${index === state.heroIndex ? 'active' : ''}' data-slide='${index}'></button>`).join('');
  dots.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => {
    state.heroIndex = Number(button.dataset.slide);
    renderHero();
  }));
}

function startHeroSlider() {
  setInterval(() => {
    state.heroIndex = (state.heroIndex + 1) % heroSlides.length;
    renderHero();
  }, 6000);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  setTheme();
}

function setTheme() {
  document.body.dataset.theme = state.theme;
  localStorage.setItem('nova_theme', state.theme);
  const icon = document.getElementById('themeToggle').querySelector('i');
  icon.className = state.theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

function toggleNav() {
  document.getElementById('siteNav').classList.toggle('open');
}

function setupReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
}

function setupCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.target);
      let current = 0;
      const duration = 1200;
      const startTime = performance.now();
      const tick = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        current = Math.floor(target * eased);
        entry.target.textContent = `${current}${target > 100 ? '+' : '%'}`;
        if (progress < 1) requestAnimationFrame(tick);
        else entry.target.textContent = `${target}${target > 100 ? '+' : '%'}`;
      };
      requestAnimationFrame(tick);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.7 });

  counters.forEach((counter) => observer.observe(counter));
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), 1800);
}

function hideLoader() {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 900);
}

document.addEventListener('DOMContentLoaded', init);
