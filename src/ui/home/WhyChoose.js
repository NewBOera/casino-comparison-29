import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class WhyChoose extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="why-choose-section" class="flex justify-center items-center">
        <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <div class="border-[1px] border-[#0F0F0F1A] rounded-xl p-6 lg:p-8 flex flex-col gap-4">
            <h2 class="font-medium text-lg xl:text-2xl">Why choose our Birmingham curatorship?</h2>

            <p class="font-medium xl:text-lg">Unearth the top casinos in the second largest gaming city in the UK.</p>

            <p class="text-base font-normal lg:text-lg xl:text-xl xl:leading-relaxed">
              Have you ever considered why casinos have an allure that is rather distinct? Top-notch venues may include a buzzing and lively atmosphere for a night out, with scented-air, twinkling
              neon lights, not to mention the releasing coins cling-clang metallic sound of slot machines indicating somebody just got lucky to walk away with a nice prize.
            </p>

            <p class="text-base font-normal lg:text-lg xl:text-xl xl:leading-relaxed">
              Also, the thrill and chance to beat the dealer at blackjack, land on the right color at the roulette table, and lead the first place with a surprising poker hand. We understand all the
              excitement of the right casino experience. Whether you are an expert high-roller or an occasional customer to casinos, we know what you are looking for. And that is just the most
              valuable reason why trust our platform to choose a visit for your next escape.
            </p>

            <p class="text-base font-normal lg:text-lg xl:text-xl xl:leading-relaxed">
              While London boasts casinos with tradition and history Birmingham is offering modern alternatives where leisure meets roulette, poker, slots to compete with the capital city venues, not
              to mention other international gaming hubs. Having all this in consideration we have designed this unique platform dedicated to the second largest gaming town in the UK.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('why-choose-section', WhyChoose);
