import { Req, Controller, Post, HttpCode, HttpStatus, Res } from '@nestjs/common';
import  {AppService}  from './app.service';

import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client(process.env.CLIENT_ID);

@Controller()
export class AppController {
  constructor(private readonly AppService: AppService) {}


  @Post('/google')
  async authorizeGoogle(@Req() req , @Res() res) {
    try{
     const body = await this.AppService.autorizationGoogleServiese(req,client)
      //  @HttpCode(HttpStatus.OK);
      res.status(HttpStatus.OK).send(body)
      // console.log(body)
      //  return body
    }catch(e){
      res.status(HttpStatus.BAD_REQUEST).send(e)
      
    }
   
     
  }
}
