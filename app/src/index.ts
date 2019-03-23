import {
  LitElement, html, css, customElement
} from 'lit-element';

import './container.ts';
import './counter.ts';

const TEXT = 'cletsa (create-lit-element-typescript-app)';
const LINK = `https://github.com/andrewthehan/cletsa`;

@customElement('x-root')
export class Root extends LitElement {
  
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      background: #232931;
    }
  `;

  render() {
    return html`
      <x-counter>
        <div>Click me!</div>
        Counter:
      </x-counter>
      <x-container title="Hello world!" text="${TEXT}" link="${LINK}">
      </x-container>
    `;
  }
}
