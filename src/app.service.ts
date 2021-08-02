import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {"Info": "Hi, Ibra!"};
  }

  getTest(): String {
    return `Hi! That's a new test.`;
  }

  postTest(Data: Object): Object {
    return {"Test": "We get it back to you."};
  }
}
