import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import Item from './item'

@Injectable()
export class ApiService {
  public static readonly base: string = 'app'
  public static readonly list: string = `${ApiService.base}/list`
  public id = 0

  constructor (private http: HttpClient) {
    this.getList().subscribe((list: Item[]) => {
      this.id = list[list.length - 1].id + 1
    })
  }

  public getList (): Observable<Item[]> {
    return this.http.get<Item[]>(ApiService.list, {
      headers: this.headers()
    })
  }

  public addItem (item: Item): Observable<Item> {
    const entry = { ...item, id: this.id++ }
    return this.http.post<Item>(ApiService.list, entry, {
      headers: this.headers()
    })
  }

  public getItem (id: number): Observable<Item> {
    return this.http.get<Item>(`${ApiService.list}/${id}`, {
      headers: this.headers()
    })
  }

  public updateItem (item: Item): Observable<Item> {
    return this.http.put<Item>(`${ApiService.list}/${item.id}`, item, {
      headers: this.headers()
    })
  }

  public removeItem (id: number): Observable<Item> {
    return this.http.delete<Item>(`${ApiService.list}/${id}`, {
      headers: this.headers()
    })
  }

  protected headers (): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return headers
  }
}
