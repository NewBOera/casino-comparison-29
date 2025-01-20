import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Hero extends LitElement {
  constructor() {
    super();
    this.name = 'World';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        #hero-section {
          min-height: max-content;
          padding: 0 0 50px 0;
        }
        @media (min-width: 1524px) {
          #hero-section {
            height: calc(80vh);
            min-height: 600px;
          }
        }

        @media (min-width: 1024px) {
          #hero-section {
            height: calc(50vh);
            min-height: 600px;
            padding: 0;
          }
        }
      </style>

      <section id="hero-section" class="flex justify-center items-center">
        <div
          class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10 h-full flex flex-col justify-center items-center gap-8 mt-[130px] lg:mt-[80px]"
        >
          <h1 class="font-Poppins text-2xl flex flex-col">
            <span>Top 7 Casinos in</span>
            <span>Birmingham, UK</span>
          </h1>

          <p class="text-center">Where the best gaming venues from the West Midlands come together. Explore the thrilling venues this UK city has to offer in one place!</p>

          <div class="flex gap-6">
            <a href="" class="flex-1 text-center gradient text-white rounded-2xl py-2 px-4">Contact Us</a>
            <a href="" class="flex-1 text-center bg-white rounded-2xl py-2 px-4">Contact Us</a>
          </div>
        </div>
      </section>
    `;
  }

  updateName(event) {
    this.name = event.target.value;
  }
}

customElements.define('hero-section', Hero);
