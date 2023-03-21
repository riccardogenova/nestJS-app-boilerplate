import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  async getExample() {
    return {
      _id: '1',
      name: 'example',
    };
  }
}
