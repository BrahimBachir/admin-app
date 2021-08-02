import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Object {
    return this.appService.getHello();
  }

  /*@Get('/test')
  getHTest(): String {
    return this.appService.getTest();
  }

  @Post('/test')
  postTest(Data: String): Object {
    console.log(Data);
    return this.appService.postTest(Data);
  }*/
}
