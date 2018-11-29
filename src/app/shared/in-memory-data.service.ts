import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/en_US';
import { Material, Account } from '../../models';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    faker.seed(123)
    let materials = []
    let chartofaccounts = []
    for (let i = 0; i < 200; i++) {
      let a = new Material()
      let b = new Account()
      b.faker()
      a.faker()
      materials.push(a);
      chartofaccounts.push(b)
    }
    return {materials, chartofaccounts};
  }

}
