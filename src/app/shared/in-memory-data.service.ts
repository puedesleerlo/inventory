import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/en_US';
import { Material } from '../../models';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    faker.seed(123)
    let materials = []
    for (let i = 0; i < 200; i++) {
      let a = new Material()
      a.faker()
      materials.push(a);
    }
    return {materials};
  }

}
