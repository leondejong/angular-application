import { Component } from '@angular/core'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  public heading = 'Physicists'
  public footer = `©${new Date().getFullYear()}`
}
