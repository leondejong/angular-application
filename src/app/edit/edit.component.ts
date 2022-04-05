import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms'

import { ApiService } from '../api/api.service'
import Item from '../api/item'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public id: number
  public item: Item
  public form: FormGroup
  public message: string

  constructor (
    private api: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.item = {
      id: 0,
      name: '',
      link: '',
      content: '',
      active: false
    }
    this.initForm(this.item)
    this.message = ''
  }

  ngOnInit (): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))

    this.api.getItem(this.id).subscribe((item: Item) => {
      this.item = { ...item }
      this.initForm(item)
    })
  }

  initForm (item: Item): void {
    this.form = this.formBuilder.group({
      id: [item.id || 0],
      name: [item.name || ''],
      link: [item.link || ''],
      content: [item.content || ''],
      active: [item.active || false]
    })
  }

  onSubmit () {
    this.api.updateItem(this.form.value).subscribe(() => {
      this.message = 'Entry saved!'
      setTimeout(() => (this.message = ''), 3000)
    })
  }
}
