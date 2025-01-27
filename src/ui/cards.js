import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Cards extends LitElement {
  constructor() {
    super();
    this.data = [
      {
        icon: 'https://cdn.best10ukspots.com/public/assets/cards/1.webp',
        title: 'Traditional casinos array',
        description: 'Offering classic tables and electronic games.',
      },
      {
        icon: 'https://cdn.best10ukspots.com/public/assets/cards/2.webp',
        title: 'Fine restaurants',
        description: ' Including available restaurants & bars in Birmingham casinos.',
      },
      {
        icon: 'https://cdn.best10ukspots.com/public/assets/cards/3.webp',
        title: 'Lavish brick-and-mortar venues',
        description: 'Boasting the top venues in town.',
      },
      {
        icon: 'https://cdn.best10ukspots.com/public/assets/cards/4.webp',
        title: 'Live entertainment.',
        description: 'Considering music tributes, karaoke nights and special events. ',
      },
    ];
  }

  createRenderRoot() {
    return this;
  }

  generateCards() {
    return this.data.map((item, index) => {
      return html`
        <div class="flex flex-col justify-between w-full md:w-[46%] lg:w-[23%] bg-white p-4 items-center text-center gap-2 rounded-xl">
          <img src="${item.icon}" class="size-[46px] mb-3" alt="" />
          <h3 class="font-bold text-base lg:text-lg xl:text-xl xl:leading-relaxed">${item.title}</h3>
          <p class="text-base font-normal lg:text-lg xl:text-xl xl:leading-relaxed">${item.description}</p>
        </div>
      `;
    });
  }

  render() {
    return html`
      <style>
        #cards-section {
          background-image: url('https://cdn.best10ukspots.com/public/assets/cards/bg-cards.webp');
          background-size: cover;
          background-position: center;
        }
      </style>

      <section id="cards-section" class="flex py-8 justify-center items-center">
        <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10 h-full flex flex-col justify-center items-center gap-8 py-14">
          <h3 class="font-bold text-[20px] text-white text-center lg:text-[26px]/[39px]  w-full">Services and benefits included in our platform</h3>
          <div class="flex flex-col md:flex-row md:flex-wrap gap-4 w-full">${this.generateCards()}</div>
        </div>
      </section>
    `;
  }

  updateName(event) {
    this.name = event.target.value;
  }
}

customElements.define('cards-section', Cards);
