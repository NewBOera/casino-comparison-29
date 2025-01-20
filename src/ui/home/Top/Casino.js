import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Casino extends LitElement {
  static properties = {
    casinoID: { type: String },
    casinoInfo: { type: Object },
  };

  constructor() {
    super();
    this.casinoID = '';
    this.casinoInfo = null;
  }

  createRenderRoot() {
    return this;
  }

  async firstUpdated() {
    this.casinoInfo = await this.fetchCasinos();
    console.log(this.casinoInfo);

    this.requestUpdate();
  }

  async fetchCasinos() {
    try {
      const response = await fetch('/data/casinos.json');
      const data = await response.json();
      return data.find(casino => casino.id === this.casinoID);
    } catch (error) {
      console.error('Error fetching casinos:', error);
      return null;
    }
  }

  render() {
    console.log(this.casinoID);
    if (this.casinoInfo === null) {
      return html`
        <section id="casino-choices-section" class="flex justify-center items-center">
          <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10">
            <h2 class="text-red-600 xl:text-lg">Error fetching casino data. Please try again later.</h2>
          </div>
        </section>
      `;
    }

    return html`
      <article class="flex flex-col gap-6">
        <section class="flex flex-col gap-4">
          <div>
            <h2>1. Top Ranked Casino in Mayfair Crown London</h2>
            <h4 class="text-sm">Per person:  Starting at £899, and u to £2697</h4>
          </div>

          <p>
            We are glad you have reached out [change_NAME], the reference hub for the utmost land-based casinos in the United Kingdom. Providing you with the most complete descriptions and benefits
            for each gaming venue. Whether you are an enthusiast beginner into casino gaming, or a pro punter looking for thrilling gambling action, this is the right place to ease your selection.
          </p>

          <p>
            We are glad you have reached out [change_NAME], the reference hub for the utmost land-based casinos in the United Kingdom. Providing you with the most complete descriptions and benefits
            for each gaming venue. Whether you are an enthusiast beginner into casino gaming, or a pro punter looking for thrilling gambling action, this is the right place to ease your selection.
          </p>
        </section>

        <section class="flex flex-col">
          <div class="flex lg:flex-col">
            <div class="bg-[#EFEAF6] border-[1px] border-[#0F0F0F0D] w-4/12 pb-16 px-4 pt-4 lg:w-3/12 lg:p-4">
              <h5>Best for</h5>
            </div>

            <div class="border-[1px] border-[#0F0F0F0D] w-8/12 pb-16 px-4 pt-4 lg:w-3/12">
              <p>All inclusive venue</p>
            </div>
          </div>
        </section>
      </article>
    `;
  }
}

customElements.define('casino-element', Casino);
