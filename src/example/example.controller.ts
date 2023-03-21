import { CACHE_MANAGER, Controller, Get, Inject, Post } from '@nestjs/common';
import { ExampleService } from './example.service';
import { Cache } from 'cache-manager';
@Controller('example')
export class ExampleController {
  constructor(
    private readonly exampleService: ExampleService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  @Get()
  getExample() {
    return this.exampleService.getExample();
  }

  @Post('cache')
  async setCache() {
    await this.cacheManager.set('example', 'element-from-cache');
    return 'new element cached';
  }

  @Get('cache')
  async getCache() {
    const element = await this.cacheManager.get('example');
    if (!!element) return element;
    else return 'Cache clear';
  }
}
