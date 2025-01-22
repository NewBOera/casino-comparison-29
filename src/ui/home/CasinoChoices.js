import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class CasinoChoices extends LitElement {
  static properties = {
    casinos: { type: Array },
  };

  constructor() {
    super();
    this.casinos = [];
  }

  createRenderRoot() {
    return this;
  }

  async firstUpdated() {
    this.casinos = await this.fetchCasinos();
    this.requestUpdate();
  }

  async fetchCasinos() {
    try {
      const response = await fetch('/data/casinoList.json');
      const data = await response.json();
      return data.map(casino => ({
        index: casino.index,
        name: casino.name,
        id: casino.id,
        openDate: casino.openDate,
      }));
    } catch (error) {
      console.error('Error fetching casinos:', error);
      return null;
    }
  }

  render() {
    if (this.casinos === null) {
      return html`
        <section id="casino-choices-section" class="flex justify-center items-center">
          <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10">
            <h2 class="text-red-600 xl:text-lg">Error fetching casino data. Please try again later.</h2>
          </div>
        </section>
      `;
    }

    return html`
      <section id="casino-choices-section" class="flex justify-center items-center">
        <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <h2 class="font-medium text-lg xl:text-2xl">Only the Hottest Casino Choices</h2>
          <ul class="mt-8 flex flex-col gap-6">
            ${this.casinos.map(
              casino => html`
                <li class="flex gap-3 items-start">
                  <div class="rounded-full bg-purple w-5 h-5 flex justify-center items-center">
                    <span class="text-white font-medium mt-1 text-sm">${casino.index}</span>
                  </div>
                  <div class="flex flex-col gap-1.5 xl:text-lg sm:flex-row">
                    <h5 class="text-purple lg:font-normal text-base font-normal lg:text-lg xl:text-xl xl:leading-relaxed">${casino.name}</h5>
                    <h6 class="font-extralight text-base lg:text-lg xl:text-xl xl:leading-relaxed text-[#0F0F0F80]">
                      Open daily
                      <span class="text-black">(${casino.openDate})</span>
                    </h6>
                  </div>
                </li>
              `
            )}
          </ul>
        </div>
      </section>
    `;
  }
}

customElements.define('casino-choices-section', CasinoChoices);
