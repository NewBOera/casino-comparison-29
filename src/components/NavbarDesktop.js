import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class NavbarDesktop extends LitElement {
  static properties = {
    isLanding: {
      type: Boolean,
      attribute: 'is-landing',
      converter: {
        fromAttribute: value => value !== 'false',
        toAttribute: value => value.toString(),
      },
    },
    observers: { state: true },
  };

  static styles = css`
    :host {
      display: block;
    }
    .active {
      color: #153131;
      font-weight: bolder;
    }
  `;

  constructor() {
    super();
    this.observers = new Map();
    this.updateActiveNavItem = this.updateActiveNavItem.bind(this);
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  firstUpdated() {
    window.addEventListener('hashchange', this.updateActiveNavItem);
    window.addEventListener('load', () => {
      this.updateActiveNavItem();
      this.setupIntersectionObservers();
    });
    window.addEventListener('popstate', this.updateActiveNavItem);

    this.updateActiveNavItem();
    this.setupIntersectionObservers();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('hashchange', this.updateActiveNavItem);
    window.removeEventListener('load', this.updateActiveNavItem);
    window.removeEventListener('popstate', this.updateActiveNavItem);

    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }

  setupIntersectionObservers() {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    this.renderRoot.querySelectorAll('.nav-item').forEach(navItem => {
      const sectionId = navItem.getAttribute('id-nav');
      const section = document.getElementById(sectionId);
      console.log('SECTION');

      console.log(section);

      if (section && !this.observers.has(sectionId)) {
        const observer = new IntersectionObserver(entries => this.handleIntersection(entries, sectionId), options);

        observer.observe(section);
        this.observers.set(sectionId, observer);
      }
    });
  }

  handleIntersection(entries, sectionId) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.disableActiveItem();
        const navItem = this.renderRoot.querySelector(`[id-nav="${sectionId}"]`);
        console.log(navItem);

        if (navItem) {
          navItem.classList.add('active');

          const newUrl = `#${sectionId}`;
          if (window.location.hash !== newUrl) {
            history.replaceState(null, null, newUrl);
          }
        }
      }
    });
  }

  updateActiveNavItem() {
    this.disableActiveItem();

    const hash = window.location.hash;
    const path = window.location.pathname;
    const slicePath = path.split('/').pop() || '';

    if (hash) {
      const sectionId = hash.slice(1);
      const navItem = this.renderRoot.querySelector(`[id-nav="${sectionId}"]`);
      if (navItem) {
        navItem.classList.add('active');
        return;
      }
    }

    if (slicePath === '' || slicePath === 'index.html') {
      const homeItem = this.renderRoot.querySelector('[id-nav="home-section"]');
      if (homeItem) {
        homeItem.classList.add('active');
      }
    } else {
      const navItem = this.renderRoot.querySelector(`[id-nav="${slicePath}"]`);
      if (navItem) {
        navItem.classList.add('active');
      }
    }
  }

  disableActiveItem() {
    const activeItem = this.renderRoot.querySelector('.nav-item.active');
    if (activeItem) {
      activeItem.classList.remove('active');
    }
  }

  render() {
    return html`
      <link rel="stylesheet" href="/public/styles/output.css" />
      <link rel="stylesheet" href="/public/styles/globals.css" />

      <header class="hidden text-black justify-center items-center lg:inline-flex fixed z-50 w-full bg-[#FFFFFF] font-Peridot shadow-sm">
        <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-4">
          <nav class="flex justify-between items-center rounded-xl h-[80px] w-full px-5">
            <div class="flex items-center flex-grow-0">
              <div class="font-normal text-lg flex gap-2 items-center">
                <a href="${this.isLanding ? '#hero-section' : 'index.html'}">
                  <img id="navbar-logo" class="object-contain size-12 shrink-0" src="/public/assets/navbar/logo.png" alt="Top 10 Uk Play Spots logo" title="Top 10 Uk Play Spots" />
                </a>
              </div>
            </div>

            <div class="flex-grow-1">
              <div class="font-normal">
                <ul id="nav-items" class="flex justify-center gap-10 xl:gap-20">
                  <li class="transition-all duration-200 nav-item ${this.activeSection === 'hero-section' ? 'active' : ''}" id-nav="hero-section">
                    <a href="${this.isLanding ? '#hero-section' : 'index.html'}">Home</a>
                  </li>
                  <li class="transition-all duration-200 nav-item ${this.activeSection === 'about-section' ? 'active' : ''}" id-nav="about-section">
                    <a href="${this.isLanding ? '#about-section' : 'index.html#about-section'}">About Us</a>
                  </li>
                  <li class="transition-all duration-200 nav-item ${this.activeSection === 'why-us-section' ? 'active' : ''}" id-nav="why-us-section">
                    <a href="${this.isLanding ? '#why-us-section' : 'index.html#why-us-section'}">Why Us?</a>
                  </li>
                  <li class="transition-all duration-200 nav-item ${this.activeSection === 'top-7-section' ? 'active' : ''}" id-nav="top-7-section">
                    <a href="${this.isLanding ? '#top-7-section' : 'index.html#top-7-section'}">Top 7</a>
                  </li>
                  <li class="transition-all duration-200 nav-item ${this.activeSection === 'faq-section' ? 'active' : ''}" id-nav="faq-section">
                    <a href="${this.isLanding ? '#faq-section' : 'index.html#faq-section'}">F.A.Q</a>
                  </li>
                  <li>
                    <a href="booking.html" class="bg-[#0F0F0F] hover:scale-105 transition-all duration-200 py-2 px-5 rounded-full text-white">
                      <span class="font-medium">Contact Us</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('navbar-desktop', NavbarDesktop);
