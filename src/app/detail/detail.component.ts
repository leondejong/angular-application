import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ApiService } from '../api/api.service'
import Item from '../api/item'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public id: number
  public item: Item
  public list: Item[]

  constructor (private route: ActivatedRoute, private api: ApiService) {
    this.item = {
      id: 0,
      name: '',
      link: '',
      content: '',
      active: false
    }
  }

  ngOnInit (): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))

    this.api.getItem(this.id).subscribe((item: Item) => {
      this.item = { ...item }
    })
  }
}
