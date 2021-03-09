import { Req, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import  {AppService}  from './app.service';

import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client(process.env.CLIENT_ID);

@Controller()
export class AppController {
  constructor(private readonly AppService: AppService) {}


  @Post('/google')
  async authorizeGoogle(@Req() req) {
    try{
     const body = await this.AppService.autorizationGoogleServiese(req,client)
      //  @HttpCode(HttpStatus.OK);
      console.log(body)
       return body
    }catch(e){
      // @HttpCode(HttpStatus.BAD_REQUEST);
    }
   
     
  }
}
