import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  template: `
    <button [type]="type" class="input button">
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      @import './input.css';

      .button {
        cursor: pointer;
      }

      :host(.edit) .button {
        background: rgba(0, 127, 223, 1);
      }

      :host(.edit) .button:hover,
      :host(.edit) .button:focus,
      :host(.edit) .button:active {
        background: rgba(0, 159, 255, 1);
      }

      :host(.add) .button {
        background: rgba(0, 159, 63, 1);
      }

      :host(.add) .button:hover,
      :host(.add) .button:focus,
      :host(.add) .button:active {
        background: rgba(0, 191, 63, 1);
      }

      :host(.remove) .button {
        background: rgba(223, 31, 0, 1);
      }

      :host(.remove) .button:hover,
      :host(.remove) .button:focus,
      :host(.delete) .button:active {
        background: rgba(255, 31, 0, 1);
      }
    `
  ]
})
export class ButtonComponent {
  @Input() type: string = 'button'
}
