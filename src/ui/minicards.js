import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class MiniCards extends LitElement {
  constructor() {
    super();
    this.data = [
      {
        title: 'Unique thrilling venues',
        description: 'Boasting the most exciting casinos with classic gaming array, the best dining options, and more perks and amenities each venue provides for a unique experience.',
      },
      {
        title: 'Tailored offers',
        description: 'With the aid of our team of expert agents we are ready to provide you with unique packages and promotions to book a special visit to the top Birmingham’s casinos.',
      },
      {
        title: 'Airport transportation',
        description: 'Whether you are traveling domestically or abroad, we can offer you with optional airport transportation for your convenience.',
      },
      {
        title: 'Truly reliable sources.',
        description: 'Designed with comprehensive and trusted insights about each venue, and with expert information from the casino scene that aid us to back up our exclusive site.',
      },
      {
        title: 'Quick tours',
        description: 'We may also offer quick tours to your casino of choice for your convenience as an extra service.',
      },
    ];
  }

  createRenderRoot() {
    return this;
  }

  generateCards() {
    return this.data.map((item, index) => {
      const isEven = index % 2 === 0;
      return html`
        <div class="flex flex-col ${isEven ? 'lg:flex-row-reverse text-right' : 'lg:flex-row text-left'} lg:gap-4 text-[18px] border p-6 md:p-8 items-start gap-2 rounded-lg">
          <img src="https://cdn.best10ukspots.com/public/assets/minicards/icon.webp" class="size-[65px] mb-5" alt="" />
          <div>
            <h3 class="font-bold text-base lg:text-lg xl:text-xl xl:leading-relaxed">${item.title}</h3>
            <p class="text-base font-normal lg:text-lg xl:text-xl xl:leading-relaxed">${item.description}</p>
          </div>
        </div>
      `;
    });
  }

  render() {
    return html`
      <section id="minicards-section" class="flex justify-center items-center">
        <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10 h-full flex flex-col justify-center items-center gap-8">
          <h2 class="font-medium text-lg xl:text-2xl w-full">Make the most of our unique ranking platform offer:</h2>
          <div class="flex flex-col gap-4 w-full">${this.generateCards()}</div>
        </div>
      </section>
    `;
  }

  updateName(event) {
    this.name = event.target.value;
  }
}

customElements.define('minicards-section', MiniCards);
