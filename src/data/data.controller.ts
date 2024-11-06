import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  // 1st API: Store data and return unique ID
  @Post('add')
  addData(
    @Body('stringValue') stringValue: string,
    @Body('integerValue') integerValue: number,
  ): { id: string } {
    const id = this.dataService.addData(stringValue, integerValue);
    return { id };
  }

  // 2nd API: Get data by unique ID
  @Get(':id')
  getDataById(@Param('id') id: string): any {
    const data = this.dataService.getDataById(id);
    if (data) {
      return data;
    } else {
      return { message: 'Data not found' };
    }
  }

  // 3rd API: Get all stored data
  @Get()
  getAllData(): any {
    return this.dataService.getAllData();
  }
}
