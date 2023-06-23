import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any;

  constructor() { }

  setData(name: string, roll: number, score: number, dateOfBirth:Date) {
    this.data = { name, roll, score, dateOfBirth };
  }

  getData() {
    return this.data;
  }
}
