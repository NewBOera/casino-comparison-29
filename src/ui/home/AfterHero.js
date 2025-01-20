import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import '../../components/ImgAh.js';

export class AfterHero extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="/public/styles/output.css" />

      <section class="bg-[#F4F4F4] flex flex-col gap-4 py-5 px-4">
        <div>
          <p class="text-xl font-semibold ">We unearth Birmingham’s gaming value as a leading hub for the casino industry</p>
          <p class=" text-base font-normal">
            It is no secret that the United Kingdom’s casino industry has boosted over the years, positioning itself as one of the major hubs for gaming entertainment worldwide. Aside from London,
            Birmingham has more land-based casinos than any city in the country. Having in mind that the Midlands town may be the second largest gaming city in the UK, is the reason behind the
            creation of this platform.
          </p>
        </div>
      </section>
      <img-after-hero></img-after-hero>
    `;
  }
}
customElements.define('after-hero-section', AfterHero);
