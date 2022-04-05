import { Component, OnInit } from '@angular/core'

import { ApiService } from '../api/api.service'
import Item from '../api/item'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public item: Item = {
    id: 0,
    name: '',
    link: '',
    content: '',
    active: false
  }
  public list: Item[] = []

  constructor (private api: ApiService) {}

  ngOnInit (): void {
    this.update()
  }

  private update () {
    this.getList()
  }

  public getItem (id: number) {
    this.api.getItem(id).subscribe((item: Item) => {
      this.item = { ...item }
    })
  }

  public addItem (item: Item) {
    this.api.addItem(item).subscribe((item: Item) => {
      this.item = { ...item }
      this.update()
    })
  }

  public updateItem (item: Item) {
    this.api.updateItem(item).subscribe((item: Item) => {
      this.item = { ...item }
      this.update()
    })
  }

  public removeItem (id: number) {
    this.api.removeItem(id).subscribe((item: Item) => {
      this.item = { ...item }
      this.update()
    })
  }

  public getList () {
    return this.api.getList().subscribe((list: Item[]) => {
      this.list = [...list]
    })
  }
}
