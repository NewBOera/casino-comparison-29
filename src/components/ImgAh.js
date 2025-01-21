import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class ImgAh extends LitElement {
  render() {
    return html`
      <section class="grid grid-cols-2">
        <div>
          <img src="/public/assets/afterHero/1.png" alt="${this.alt}" class="object-contain" />
          <img src="/public/assets/afterHero/1.png" alt="${this.alt}" class="object-contain" />
        </div>
        <div>
          <img src="/public/assets/afterHero/1.png" alt="${this.alt}" class="object-contain" />
          <img src="/public/assets/afterHero/1.png" alt="${this.alt}" class="object-contain" />
          <img src="/public/assets/afterHero/1.png" alt="${this.alt}" class="object-contain" />
        </div>
      </section>
    `;
  }
}

customElements.define('img-after-hero', ImgAh);
