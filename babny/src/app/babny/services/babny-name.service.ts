import { Injectable } from '@angular/core';
import { IBabnyName } from '../models/babny-name';

@Injectable()
export class BabnyNameService {

  getBabyNameByName(): IBabnyName[] {
    return [
      {
        "nameId": 1,
        "name": "Anthony",
        "gender": "M",
        "description": "This is very nice name 1",
        "origin": "American",
        "country": "USA",
        "starRating": 4,
        "popularityRank": 1,
        "trendingRank": 2,
        "imageUrl": "string"
      },
      {
        "nameId": 2,
        "name": "Tony",
        "gender": "M",
        "description": "This is very nice name 1",
        "origin": "Asia",
        "country": "Chinese",
        "starRating": 5,
        "popularityRank": 3,
        "trendingRank": 1,
        "imageUrl": "string"
      }
    ];
  }

  getProductList() {
    return [
      { user: 'Glen', project: 'Payroll App', category: 'Backend', startTime: 1000, endTime: 1700, date: 1434243 },
      { user: 'Karen', project: 'Agile Times', category: 'Frontend', startTime: 900, endTime: 1700, date: 1434243 },
      { user: 'Si', project: 'Mobile App', category: 'Operations', startTime: 1100, endTime: 1700, date: 1434243 },
      { user: 'Rohit', project: 'Agile Times', category: 'Backend', startTime: 800, endTime: 1700, date: 1434243 },

    ];
  }

  constructor() { }

}
