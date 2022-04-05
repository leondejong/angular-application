import {
  Component,
  AfterViewInit,
  Input,
  Output,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  EventEmitter
} from '@angular/core'

import Item from '../api/item'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements AfterViewInit {
  @ViewChild('entry') entry: TemplateRef<any>
  @Input() item: Item
  @Output() remove = new EventEmitter<any>()

  constructor (private viewContainerRef: ViewContainerRef) {
    this.item = {
      id: 0,
      name: '',
      link: '',
      content: '',
      active: false
    }
  }

  ngAfterViewInit () {
    setTimeout(() => this.viewContainerRef.createEmbeddedView(this.entry), 0)
  }

  removeEntry () {
    this.remove.emit(this.item)
  }
}
