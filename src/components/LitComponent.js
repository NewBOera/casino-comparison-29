import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class LitComponent extends LitElement {
  static properties = {
    name: {},
  };

  static styles = css`
    :host {
      display: block;
      padding: 1em;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin: 1em;
    }
  `;

  constructor() {
    super();
    this.name = 'World';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="first-comp" class="bg-slate-900 h-screen w-full">
        <a href="#second-section" class="text-white">Click me</a>
      </section>
    `;
  }

  updateName(event) {
    this.name = event.target.value;
  }
}

customElements.define('lit-component', LitComponent);
