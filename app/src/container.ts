import {
  LitElement, html, css, customElement, property
} from 'lit-element';

@customElement('x-container')
export class Container extends LitElement {

  @property()
  title = 'default title';

  @property()
  text = 'default text';

  @property()
  link = '#';

  static styles = css`
    :host {
      margin: 64px;
    }

    .title {
      color: #4ecca3;
      font-family: Verdana;
    }
    
    a {
      color: #eeeeee;
      font-family: Helvetica;
    }
  `;

  render() {
    return html`
      <h1 class="title">
        ${this.title}
      </h1>
      <a href="${this.link}" title="${this.link}" target="_blank" rel="noopener">
        ${this.text}
      </a>
    `;
  }
}
