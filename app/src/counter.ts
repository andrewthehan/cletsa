import {
  LitElement, html, css, customElement, property
} from 'lit-element';

@customElement('x-counter')
export class Counter extends LitElement {

  @property()
  counter = 0;

  static styles = css`
    button {
      border: none;
      padding: 8px 16px;
      background: #393e46;
      color: #eeeeee;
    }
  `;

  increment() {
    ++this.counter;
  }

  render() {
    return html`
      <button @click=${this.increment}>
        <slot></slot>
        ${this.counter}
      </button>
    `;
  }
}
