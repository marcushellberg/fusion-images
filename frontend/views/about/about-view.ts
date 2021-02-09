import '!style-loader!css-loader!./about-view.css';
import { customElement, html } from 'lit-element';
import { View } from '../../views/view';
import nova from './nova.jpg';

@customElement('about-view')
export class AboutView extends View {
  render() {
    return html`
      <h1>My dog Nova</h1>

      <p>Nova is my dog. She likes to swim and play fetch.</p>

      <img src=${nova} alt="Wet dog">

    `;
  }
}
