import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

interface StoredData {
  id: string;
  stringValue: string;
  integerValue: number;
}

@Injectable()
export class DataService {
  private dataStore = new Map<string, StoredData>();

  // Store data and return a unique ID
  addData(stringValue: string, integerValue: number): string {
    const id = uuidv4();
    const newData = { id, stringValue, integerValue };
    this.dataStore.set(id, newData);
    return id;
  }

  // Retrieve data by unique ID
  getDataById(id: string): StoredData | null {
    return this.dataStore.get(id) || null;
  }

  // Get all stored data
  getAllData(): StoredData[] {
    return Array.from(this.dataStore.values());
  }
}
