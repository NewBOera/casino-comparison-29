import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Faq extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="faq-section" class="flex justify-center items-center">
        <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <div class="border-[1px] border-[#0F0F0F1A] rounded-xl p-6 lg:p-8 flex flex-col gap-4">
            <h2 class="font-medium text-lg xl:text-2xl text-center md:text-start">Check out the FAQs we get about Birmingham casinos?</h2>

            <article class="flex flex-col gap-6"></article>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('faq-section', Faq);
