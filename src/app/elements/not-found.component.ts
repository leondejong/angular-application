import { Component } from '@angular/core'

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found">
      404: Not Found
    </div>
  `,
  styles: [
    `
      .not-found {
        width: 100%;
        text-align: center;
        font-size: 1.5rem;
      }
    `
  ]
})
export class NotFoundComponent {}
