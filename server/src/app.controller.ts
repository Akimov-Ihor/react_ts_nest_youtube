import { Req, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly AppService: AppService) {}

  @Post('/google')
  async authorizeGoogle(@Req() req) {
    try {
      const { token } = req.body;
      const body = await this.AppService.authorisationGoogleService({
        token,
      });
      return body;
    } catch (e) {
      console.log(e);
    }
  }
}
