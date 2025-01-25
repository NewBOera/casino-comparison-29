import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import '../../components/ImgAh.js';

export class AfterHero extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/public/styles/output.css" />
      <link rel="stylesheet" href="/public/styles/globals.css" />

      <section id="about-section" class="flex justify-center items-center">
        <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <section class="bg-[#F4F4F4] flex flex-col lg:flex-row gap-4 lg:gap-12 xl:gap-20 p-4 lg:p-5 xl:p-8 rounded-xl">
            <div class="flex flex-col justify-center gap-4 lg:w-7/12 xl:w-8/12">
              <h2 class="font-medium text-lg xl:text-2xl">We unearth Birmingham’s gaming value as a leading hub for the casino industry</h2>
              <p class="text-base font-normal lg:text-lg xl:text-xl xl:leading-relaxed">
                It is no secret that the United Kingdom’s casino industry has boosted over the years, positioning itself as one of the major hubs for gaming entertainment worldwide. Aside from London,
                Birmingham has more land-based casinos than any city in the country. Having in mind that the Midlands town may be the second largest gaming city in the UK, is the reason behind the
                creation of this platform.
              </p>
            </div>

            <section class="flex gap-4 w-full lg:w-5/12 xl:w-4/12 h-full max-h-[300px]">
              <div class="flex flex-col justify-between gap-4">
                <div class="w-full h-[133.33px] lg:h-[33%] overflow-hidden rounded-lg">
                  <img src="/public/assets/afterHero/1.webp" alt="Slot machines" title="Slot machines" class="w-full h-full object-cover" />
                </div>
                <div class="w-full h-[133.33px] lg:h-[33%] overflow-hidden rounded-lg lg:w-[calc(100%+20px)] lg:-ml-[20px] xl:w-[calc(100%+40px)] xl:-ml-[40px]">
                  <img src="/public/assets/afterHero/2.webp" alt="Casino cards dealer" title="Casino cards dealer" class="w-full h-full object-cover" />
                </div>
                <div class="w-full h-[133.33px] lg:h-[33%] overflow-hidden rounded-lg">
                  <img src="/public/assets/afterHero/3.webp" alt="Casino chips and dice" title="Casino chips and dice" class="w-full h-full object-cover" />
                </div>
              </div>

              <div class="flex flex-col justify-between gap-4">
                <div class="w-full h-2/4 lg:h-2/4 overflow-hidden rounded-lg">
                  <img src="/public/assets/afterHero/4.webp" alt="Casino slot machines" title="Casino slot machines" class="w-full h-full object-cover" />
                </div>
                <div class="w-full h-2/4 lg:h-2/4 overflow-hidden rounded-lg">
                  <img src="/public/assets/afterHero/5.webp" alt="Casino gaming floor" title="Casino gaming floor" class="w-full h-full object-cover" />
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
    `;
  }
}
customElements.define('after-hero-section', AfterHero);
