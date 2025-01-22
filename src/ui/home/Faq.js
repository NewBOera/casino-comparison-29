import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Faq extends LitElement {
  static properties = {
    activeItem: { type: Number },
    faqItems: { type: Array },
  };

  constructor() {
    super();
    this.activeItem = -1;
    this.faqItems = [
      {
        question: 'What is the legal age to access a Birmingham casino?',
        answer:
          'All guests must be at least 18 years old to visit any casino, following strict UK regulations. We strongly suggest carrying a valid ID to ease your access, as most venues will ask to verify your age on site.',
      },
      {
        question: 'What is a brick-and-mortar casino?',
        answer:
          'A brick-and-mortar casino is a physical, traditional casino establishment that you can visit in person, as opposed to an online casino. These venues offer a real-world gaming experience with actual gaming tables, slot machines, and face-to-face interactions.',
      },
      {
        question: 'Why choose your casino platform?',
        answer:
          'Our platform provides comprehensive information about Birmingham casinos, including detailed reviews, current promotions, and real user experiences. We regularly update our content to ensure you have access to the most accurate and useful information.',
      },
      {
        question: 'Do you provide casino bookings?',
        answer: 'Yes, we facilitate casino bookings and special event reservations. Contact us directly or use our online booking system to secure your spot at your preferred Birmingham casino.',
      },
      {
        question: 'Is there a particular dress code?',
        answer:
          'Most Birmingham casinos maintain a smart casual dress code. While specific requirements may vary by venue and time of day, generally closed shoes, collared shirts, and neat attire are expected. We recommend checking with your chosen casino for their specific dress code policy.',
      },
      {
        question: 'Do casinos require membership to access?',
        answer:
          'While some Birmingham casinos may require membership, many are open to the public. Membership often provides additional benefits and rewards but is typically not mandatory for basic access.',
      },
      {
        question: 'Is parking available at the Birmingham casinos?',
        answer:
          'Most Birmingham casinos offer parking facilities, either on-site or through partnerships with nearby parking structures. Some venues provide free parking for casino guests, while others may charge a fee.',
      },
      {
        question: 'What kind of games are available at the Birmingham casinos?',
        answer:
          'Birmingham casinos offer a wide variety of games including slot machines, poker, blackjack, roulette, baccarat, and various electronic gaming options. Many venues also feature regular poker tournaments and special gaming events.',
      },
    ];
  }

  createRenderRoot() {
    return this;
  }

  toggleItem(index) {
    this.activeItem = this.activeItem === index ? -1 : index;
  }

  render() {
    return html`
      <section class="flex justify-center items-center mb-12 lg:mb-14 xl:mb-16">
        <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-6">
          <h2 class="font-medium text-lg xl:text-2xl text-center">Check out the FAQs we get about Birmingham casinos?</h2>
          <div class="flex flex-col gap-4">
            ${this.faqItems.map(
              (item, index) => html`
                <div class="bg-white rounded-xl shadow-sm">
                  <button @click=${() => this.toggleItem(index)} class="w-full py-4 px-6 flex justify-between items-center text-center">
                    <span class="text-base font-medium text-start lg:text-lg xl:text-xl xl:leading-relaxed">${item.question}</span>
                    <svg
                      class="w-6 h-6 flex-shrink-0 transform transition-transform ${this.activeItem === index ? 'rotate-180' : ''}"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div
                    class="overflow-hidden transition-all duration-300 ease-in-out"
                    style="max-height: ${this.activeItem === index ? '500px' : '0px'}; opacity: ${this.activeItem === index ? '1' : '0'}"
                  >
                    <p class="px-6 pb-4 text-base text-gray-600 font-normal lg:text-lg xl:text-xl xl:leading-relaxed">${item.answer}</p>
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('faq-section', Faq);
