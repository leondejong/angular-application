import { InMemoryDbService } from 'angular-in-memory-web-api'

import list from './list'

export class InMemDataService implements InMemoryDbService {
  createDb () {
    return { list }
  }
}
